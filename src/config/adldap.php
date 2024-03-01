<?php
$ldap_server = "ldap://192.168.0.2";
$dominio = "@serrano";
$ldap_porta = "389";
$base_dn = "OU=SERRANO,DC=serrano,DC=local";

function authenticateUser($username, $password)
{
    global $ldap_server, $ldap_porta, $dominio;

    try {
        $ldapconn = ldap_connect($ldap_server, $ldap_porta);
        if (!$ldapconn) {
            throw new Exception("Could not connect to LDAP server.");
        }
        ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);

        $bind = ldap_bind($ldapconn, $username . $dominio, $password);

        if (!$bind) {
            throw new Exception("Invalid credentials.");
        } else {
            return true;
        }

    } catch (Exception $e) {
        return false;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    if (authenticateUser($usuario, $senha)) {
        session_start();

        $filter = "(&(sAMAccountName=$usuario)(objectClass=user))";
        $attributes = array("lastLogon", "cn", "mail", "sAMAccountName", "telephoneNumber");

        $ldapconn = ldap_connect($ldap_server);
        if (!$ldapconn) {
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode(array('success' => false, 'message' => 'Could not connect to LDAP server.'));
            exit;
        }

        try {
            ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);
            ldap_bind($ldapconn, $usuario . $dominio, $senha);
            $search = ldap_search($ldapconn, $base_dn, $filter, $attributes);
            $entries = ldap_get_entries($ldapconn, $search);

            if ($entries['count'] > 0) {
                $response = array(
                    'success' => true,
                    'message' => 'Authenticated successfully',
                    'sessionId' => session_id(),
                    'user' => $usuario,
                    'attributes' => array()
                );

                foreach ($attributes as $attribute) {
                    if (isset($entries[0][$attribute][0])) {
                        $response['attributes'][$attribute] = $entries[0][$attribute][0];
                    }
                }

                if (isset($entries[0]['lastLogon'][0])) {
                    $lastLogonTimestamp = $entries[0]['lastLogon'][0];
                    $response['attributes']['lastLogonDate'] = $lastLogonTimestamp;
                }
            } else {
                $response = array(
                    'success' => false,
                    'message' => 'Invalid credentials'
                );
            }
        } catch (Exception $e) {
            $response = array(
                'success' => false,
                'message' => 'Authentication error'
            );
        }

        ldap_close($ldapconn);
    } else {
        $response = array(
            'success' => false,
            'message' => 'Authentication failed'
        );
    }

    http_response_code($response['success'] ? 200 : 401);
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

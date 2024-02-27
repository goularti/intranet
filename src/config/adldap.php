<?php
$ldap_server = "192.168.0.2";
$dominio = "@serrano";
$ldap_porta = "389";
$base_dn = "OU=SERRANO,DC=serrano,DC=local";

function obterUsuariosPorSetor($setor)
{
    global $ldap_server, $dominio, $ldap_porta, $base_dn;

    $ldapcon = ldap_connect($ldap_server, $ldap_porta) or die("Could not connect to LDAP server.");
    ldap_set_option($ldapcon, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ldapcon, LDAP_OPT_REFERRALS, 0);

    $bind = ldap_bind($ldapcon);

    if ($bind) {
        $filter = "(&(objectCategory=user)(objectClass=user)(memberOf=CN=$setor,$base_dn))";
        $attributes = array("cn", "mail", "sAMAccountName", "telephoneNumber");
        $search = ldap_search($ldapcon, $base_dn, $filter, $attributes);
        $entries = ldap_get_entries($ldapcon, $search);

        $usuarios = array();

        for ($i = 0; $i < $entries['count']; $i++) {
            $usuario = array();
            foreach ($attributes as $attribute) {
                if (isset($entries[$i][$attribute][0])) {
                    $usuario[$attribute] = $entries[$i][$attribute][0];
                }
            }
            if (!empty($usuario)) {
                $usuarios[] = $usuario;
            }
        }

        ldap_close($ldapcon);

        if (!empty($usuarios)) {
            $response = array(
                'success' => true,
                'message' => 'Usuários encontrados',
                'users' => $usuarios
            );
        } else {
            $response = array(
                'success' => false,
                'message' => 'Nenhum usuário encontrado no setor especificado'
            );
        }
    } else {
        $response = array(
            'success' => false,
            'message' => 'Falha ao se conectar ao LDAP'
        );
    }

    return $response;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];
    $user = $usuario . $dominio;
    $ldapcon = ldap_connect($ldap_server, $ldap_porta) or die("Could not connect to LDAP server.");

    $bind = ldap_bind($ldapcon, $user, $senha);

    if ($bind) {
        session_start();
        $filter = "(&(sAMAccountName=$usuario)(objectClass=user))";
        $attributes = array("lastLogon", "cn", "mail", "sAMAccountName", "telephoneNumber");
        $search = ldap_search($ldapcon, $base_dn, $filter, $attributes);
        $entries = ldap_get_entries($ldapcon, $search);

        if ($entries['count'] > 0) {
            $response = array(
                'success' => true,
                'message' => 'Autenticado com sucesso',
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
                'message' => 'Usuário não encontrado'
            );
        }
    } else {
        $response = array(
            'success' => false,
            'message' => 'Ldap não autenticado'
        );
    }
    echo json_encode($response);
}

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['sector'])) {
    $setor = $_GET['sector'];
    $result = obterUsuariosPorSetor($setor);
    echo json_encode($result);
}
?>

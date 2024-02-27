<?php
$ldap_server = "192.168.0.2";
$dominio = "@serrano";
$ldap_porta = "389";
$base_dn = "OU=SERRANO,DC=serrano,DC=local";

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
?>

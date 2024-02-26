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
        $_SESSION['usuario'] = $usuario;

        $token = bin2hex(random_bytes(32));

        $_SESSION['token'] = $token;

        $response = array(
            'success' => true,
            'message' => 'Autenticado com sucesso',
            'token' => $token,
            'user' => $usuario
        );

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With");

    } else {
        $response = array(
            'success' => false,
            'message' => 'Ldap não autenticado'
        );

    }
    echo json_encode($response);
}
?>

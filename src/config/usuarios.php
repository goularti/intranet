<?php
function getUsersBySector()
{
    $ldap_server = "ldap://192.168.0.2";
    $dn = 'ubuntu@serrano.local';
    $password = 'serrano';
    $base_dn = "OU=SERRANO,DC=serrano,DC=local";

    $ldapcon = ldap_connect($ldap_server);

    if (!$ldapcon) {
        return [];
    }

    ldap_set_option($ldapcon, LDAP_OPT_PROTOCOL_VERSION, 3);

    $bind = ldap_bind($ldapcon, $dn, $password);

    if (!$bind) {
        ldap_close($ldapcon);
        return [];
    }

    $filter = '(&(objectClass=user)(objectCategory=person)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))';
    $attributes = ['cn', 'mail', 'samaccountname', 'telephonenumber'];

    $sectors = [
        'Administrativo',
        'Atendimento',
        'DP',
        'Financeiro',
        'Gerencia',
        'Informatica',
        'Juridico',
        'Manifestacoes',
        'Projetos',
        'Propaganda',
        'Redacao',
        'RH',
        'Suporte Comercial'
    ];

    $usersBySector = [];

    foreach ($sectors as $sector) {
        $sector_base_dn = "OU=$sector,$base_dn";
        $search = ldap_search($ldapcon, $sector_base_dn, $filter, $attributes);
        $users = [];
        if ($search) {
            $entries = ldap_get_entries($ldapcon, $search);
            for ($i = 0; $i < $entries['count']; $i++) {
                $user = [];
                foreach ($attributes as $attribute) {
                    if (isset($entries[$i][$attribute][0])) {
                        $user[$attribute] = $entries[$i][$attribute][0];
                    }
                }
                if (!empty($user)) {
                    $users[] = $user;
                }
            }
        }
        $usersBySector[$sector] = $users;
    }

    ldap_close($ldapcon);

    return $usersBySector;
}

$usersBySector = getUsersBySector();
echo json_encode($usersBySector);
?>

const express = require('express');
const ldap = require('ldapjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function getUsersBySector(sector, res) {
    const dn = 'ubuntu@serrano.local';
    const password = 'serrano';
    const client = ldap.createClient({ url: 'ldap://192.168.0.2:389/' });
    const opts = {
        filter: '(&(objectClass=user)(objectCategory=person)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))',
        scope: 'sub',
        attributes: ['description', 'mail', 'sAMAccountName', 'telephoneNumber']
    };

    client.bind(dn, password, function(err) {
        if (err) {
            console.log('LDAP bind failed: ', err);
            return res.status(500).send('Error connecting to LDAP.');
        }

        client.search(`OU=${sector},OU=SERRANO,DC=serrano,DC=local`, opts, function(err, search) {
            if (err) {
                console.log('LDAP search failed: ', err);
                return res.status(500).send('Error searching LDAP.');
            }

            const users = [];

            search.on('searchEntry', function(entry) {
                let user = {};
                entry.attributes.forEach(attribute => {
                    if (!attribute.values.some(value => value.includes('$'))) {
                        user[attribute.type] = attribute.values[0];
                    }
                });
                if (Object.keys(user).length > 0) {
                    console.log('User: ', user);
                    users.push(user);
                }
            });

            search.on('error', function(err) {
                console.log('Error on search: ', err);
                return res.status(500).send('Error on search.');
            });

            search.on('end', function(result) {
                console.log('Search status: ', result.status);
                const filteredUsers = users.filter(user => Object.keys(user).length > 0);
                res.send(filteredUsers);
            });
        });
    });
}

app.get('/users/:sector', (req, res) => {
    const sector = req.params.sector;
    getUsersBySector(sector, res);
});

app.get('/sectors', (req, res) => {
    const dn = 'ubuntu@serrano.local';
    const password = 'serrano';
    const client = ldap.createClient({ url: 'ldap://192.168.0.2:389/' });
    const opts = {
        filter: '(|(objectclass=organizationalUnit)(objectclass=structural))',
        scope: 'one',
        attributes: ['name']
    };

    client.bind(dn, password, function(err) {
        if (err) {
            console.log('LDAP bind failed: ', err);
            return res.status(500).send('Error connecting to LDAP.');
        }

        client.search('OU=SERRANO,dc=serrano,dc=local', opts, function(err, search) {
            if (err) {
                console.log('LDAP search failed: ', err);
                return res.status(500).send('Error searching LDAP.');
            }

            const sectors = [];

            search.on('searchEntry', function(entry) {
                console.log('Entry attributes: ', entry.attributes);
                const sectorName = entry.attributes.find(attr => attr.type === 'name');
                if (sectorName) {
                    const sector = sectorName.values[0];
                    if (!['Computers', 'Groups', 'Outros', 'Externo'].includes(sector)) {
                        sectors.push(sector);
                    }
                }
            });

            search.on('error', function(err) {
                console.log('Error on search: ', err);
                return res.status(500).send('Error on search.');
            });

            search.on('end', function() {
                res.send(sectors);
            });
        });
    });
});

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
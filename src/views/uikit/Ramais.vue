<template>
    <div class="card">
        <h2>Ramais</h2>
        <Accordion>
            <AccordionTab v-for="(users, sector) in usersBySector" :key="sector">
                <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        <span class="font-bold white-space-nowrap">{{ sector }}</span>
                        <Badge class="ml-auto" :value="userCount(users)" />
                    </span>
                </template>
                <div class="usuario">
                    <div class="lista" v-for="user in users" :key="user.samaccountname">
                        <div class="nome">
                            <span>Nome:</span>
                            <p>{{ user.cn }}</p>
                        </div>
                        <divider layout="vertical" />
                        <div class="email">
                            <span>E-mail:</span>
                            <p>{{ user.mail || '@intranet.local' }}</p>
                        </div>
                        <divider layout="vertical" />
                        <div class="ramal">
                            <span>Ramal:</span>
                            <p>{{ user.telephonenumber || '000' }}</p>
                        </div>
                    </div>
                </div>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usersBySector: {}
        };
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('./config/usuarios.php');
                this.usersBySector = await response.json();
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        },
        userCount(users) {
            return users.length;
        }
    },
    created() {
        this.fetchData();
    }
};
</script>

<style scoped>
.lista {
    display: flex;
    align-items: center;
}

.lista span, span {
    margin-right: 10px;
    font-weight: bold;
}

.lista p {
    margin: 0;
    line-height: 0;
}

.usuario {
    margin-bottom: 10px;
}

.nome,
.email,
.ramal {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}
</style>

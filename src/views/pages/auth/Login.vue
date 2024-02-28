<template>
    <div
        class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/layout/images/logo-white.png" alt="Intranet logo"
                             class="mb-5 w-6rem flex-shrink-0 w-5rem border-circle shadow-8" />
                        <div class="text-900 text-3xl font-medium mb-3">Acesse o intranet</div>
                        <span class="text-600 font-medium">Utilize o usuário e senha do computador</span>
                    </div>

                    <div>
                        <form @submit.prevent="login">
                            <label for="username" class="block text-900 text-xl font-medium mb-2">Usuário</label>
                            <InputText id="username" type="text" placeholder="Usuário da rede"
                                       class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="username" />

                            <label for="password" class="block text-900 font-medium text-xl mb-2">Senha</label>
                            <Password id="password" v-model="password" placeholder="Senha do usuário" :toggleMask="true"
                                      class="w-full mb-3" inputClass="w-full"
                                      :inputStyle="{ padding: '1rem' }"></Password>
                            <Button type="submit" label="Acessar" class="w-full p-3 text-xl mt-8"></Button>
                        </form>
                    </div>

                    <div v-if="message" class="text-red-500 mt-4">
                        {{ message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import router from '@/router';

export default {
    data() {
        return {
            username: '',
            password: '',
            message: ''
        };
    },
    methods: {
        login() {
            const formData = {
                usuario: this.username,
                senha: this.password
            };

            axios.post('http://localhost/adldap.php', qs.stringify(formData))
                .then(response => {
                    if (response.data.success) {
                        localStorage.setItem('user', response.data.user);
                        localStorage.setItem('cn', response.data.attributes.cn);
                        localStorage.setItem('sessionId', response.data.sessionId);
                        console.log('Successful login, redirecting to dashboard...');
                        router.push({ name: 'dashboard' });
                    } else {
                        this.message = response.data.message;
                    }
                })
                .catch(error => {
                    console.error('Error during login request:', error);
                    this.message = 'Erro ao tentar fazer login. Por favor, tente novamente.';
                });
        }
    }
};
</script>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>

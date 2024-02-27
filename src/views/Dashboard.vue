<script setup>
import { ref, onMounted } from 'vue';

const showModal = ref(false);
const username = ref('');
const commonName = ref('');

onMounted(() => {
    const user = localStorage.getItem('user');
    const cn = localStorage.getItem('cn');

    console.log('User:', user);
    console.log('Common Name:', cn);

    if (user && cn) {
        username.value = user;
        commonName.value = cn;
        showModal.value = true;
        console.log('Modal should be visible');
    }
});

const closeModal = () => {
    showModal.value = false;
    console.log('Modal closed');
};
</script>

<template>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <div class="info">
                <p>Bem-Vindo!</p>
                <p>Usuário: {{ username }}</p>
                <p>Nome Completo: {{ commonName }}</p>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="http://suporte.intranet.local/">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">Suporte</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/suporte.png" alt="Suporte">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="http://cda.intranet.local/">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">CDA</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/cda.png" alt="CDA">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="https://sig.leiloesjudiciaisbrasil.com.br/">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">SIG</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/sig.png" alt="Sig">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="https://www.leiloesjudiciais.com.br/admin">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">Leiloar</span>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-gray-100 border-circle"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;"
                                 src="/layout/images/intranet/leiloar.png" alt="Leiloar">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="#">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">Leijudi</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/leijudi.png" alt="Leijudi">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="https://cloud.leiloesjudiciais.com.br/">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">Cloud</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/cloud.png" alt="Cloud">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="http://intranet.local/cciclos/">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">CCiclos</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/cciclos.png" alt="CCiclos">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="https://ocr.sleiloesjudiciais.com.br/ocr">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">OCR</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/ocr.png" alt="OCR">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="https://app-auth.pipefy.com/login?afterLoginRedirectTo=">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">Pipefy</span>
                        </div>
                        <div class="flex align-items-center justify-content-center border-circle overflow-hidden"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.55;" src="/layout/images/intranet/pipefy.png" alt="Pipefy">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="https://activities.neocodesoftware.com.br/dashboard#">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">NeoCode</span>
                        </div>
                        <div class="flex align-items-center justify-content-center"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;" src="/layout/images/intranet/neocode.png" alt="NeoCode">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="https://ptrp.com.br/">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">PTRP</span>
                        </div>
                        <div class="flex align-items-center justify-content-center bg-gray-100 border-circle"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.25;" src="/layout/images/intranet/ptrp.jpg"
                                 alt="Ponto">
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <a target="_blank" href="http://192.168.0.18:5000/login">
                <div class="transition-ease-in-out transition-duration-300 card mb-0 shadow-2 hover:shadow-8">
                    <div class="flex flex-row align-items-center justify-content-between">
                        <div>
                            <span class="block text-500 font-medium text-lg">Signer</span>
                        </div>
                        <div class="flex align-items-center justify-content-center border-circle signer"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.26" src="/layout/images/intranet/signer.png" alt="Signer">
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.signer {
    background: rgb(9, 39, 86);
    background: linear-gradient(310deg, rgba(9, 39, 86, 1) 30%,
    rgba(103, 13, 16, 1) 100%,
    rgba(0, 46, 107, 1) 100%,
    rgba(0, 2, 4, 1) 100%);
}

/* Estilos do modal */
.modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #888;
    width: 500px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.info {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const showModal = ref(false);
const username = ref('');
const commonName = ref('');
const weatherDescription = ref('');
const temperature = ref('');
const currentDate = ref('');

const checkModalShown = () => {
    const user = localStorage.getItem('user');
    const cn = localStorage.getItem('cn');
    const modalShown = localStorage.getItem('modalShown');

    if (user && cn && !modalShown) {
        username.value = user;
        commonName.value = cn;
        showModal.value = true;
        localStorage.setItem('modalShown', 'true');
    }
};

checkModalShown();

const closeModal = () => {
    showModal.value = false;
};

onMounted(async () => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=maringa,3457671&appid=1b8032c6e106509ad7dd79f058323861&lang=pt_br');
        const weatherData = response.data;

        weatherDescription.value = weatherData.weather[0].description;
        temperature.value = Math.round(weatherData.main.temp - 273.15);

        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDate.value = now.toLocaleDateString('pt-BR', options);
    } catch (e) {
        console.error('Error fetching weather data:', e);
    }
});

const nomeCompleto = ref(localStorage.getItem('cn'));
</script>

<template>
    <div v-if="showModal" class="modal">
        <div class="card_modal">
            <div @click="closeModal" id="close_modal">&times;</div>
            <div class="container">
                <div class="cloud front">
                    <span class="left-front"></span>
                    <span class="right-front"></span>
                </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
                <div class="cloud back">
                    <span class="left-back"></span>
                    <span class="right-back"></span>
                </div>
            </div>

            <span id="user">Bem-vindo {{ commonName }}</span>
            <div class="card-header">
                <span>Maringá, Paraná<br>Brasil</span>
                <span id="current_date">{{ currentDate }}</span>
            </div>
            <span class="temp_condition">{{ weatherDescription }}</span>
            <span class="temp">{{ temperature }}°</span>

            <div class="temp-scale">
                <span>Celcius</span>
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
                        <div class="flex align-items-center justify-content-center bg-black-alpha-20 border-circle"
                             style="width: 5rem; height: 5rem">
                            <img style="scale: 0.5;"
                                 src="/layout/images/logo-white.png" alt="Leiloar">
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
                        <div class="flex align-items-center justify-content-center bg-gray-50 border-circle"
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

.card_modal {
    width: 475px;
    height: 270px;
    position: relative;
    padding: 25px;
    background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #FFF7B1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF;
    box-shadow: 0 155px 62px rgba(0, 0, 0, 0.01), 0 87px 52px rgba(0, 0, 0, 0.05), 0 39px 39px rgba(0, 0, 0, 0.09), 0 10px 21px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.1);
    border-radius: 23px;
    transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.card_modal:hover {
    transform: scale(1.05);
}

.container {
    width: 250px;
    height: 250px;
    position: absolute;
    right: -35px;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
}

.cloud {
    width: 250px;
}

.front {
    padding-top: 45px;
    margin-left: 25px;
    display: inline;
    position: absolute;
    z-index: 11;
    animation: clouds 8s infinite;
    animation-timing-function: ease-in-out;
}

.back {
    margin-top: -30px;
    margin-left: 150px;
    z-index: 12;
    animation: clouds 12s infinite;
    animation-timing-function: ease-in-out;
}

.right-front {
    width: 45px;
    height: 45px;
    border-radius: 50% 50% 50% 0;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -25px;
    z-index: 5;
}

.left-front {
    width: 65px;
    height: 65px;
    border-radius: 50% 50% 0 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
}

.right-back {
    width: 50px;
    height: 50px;
    border-radius: 50% 50% 50% 0;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -20px;
    z-index: 5;
}

.left-back {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 0 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
}

.sun {
    width: 120px;
    height: 120px;
    background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
    background: linear-gradient(to right, #fcbb04, #fffc00);
    border-radius: 60px;
    display: inline;
    position: absolute;
}

.sunshine {
    animation: sunshines 2s infinite;
}

@keyframes sunshines {
    0% {
        transform: scale(1);
        opacity: 0.6;
    }

    100% {
        transform: scale(1.4);
        opacity: 0;
    }
}

@keyframes clouds {
    0% {
        transform: translateX(15px);
    }

    50% {
        transform: translateX(0px);
    }

    100% {
        transform: translateX(15px);
    }
}

.card-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.card-header span:first-child {
    word-break: break-all;
    font-weight: 800;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.66);
}

.card-header span:last-child {
    font-weight: 700;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.33);
}

.temp {
    position: absolute;
    left: 25px;
    bottom: 12px;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    color: rgba(87, 77, 51, 1);
}

.temp-scale {
    width: 80px;
    height: 36px;
    position: absolute;
    right: 25px;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.06);
    border-radius: 9px;
}

.temp-scale span {
    font-weight: 700;
    font-size: 13px;
    line-height: 134.49%;
    color: rgba(87, 77, 51, 0.66);
}

.temp_condition {
    position: absolute;
    left: 135px;
    bottom: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 77px;
    color: rgba(87, 77, 51, 1);
}

#current_date {
    font-weight: 700;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.33);
    position: fixed;
    transform: translateY(80px);
}

#user {
    word-break: break-all;
    font-weight: 800;
    font-size: 15px;
    line-height: 135%;
    color: rgba(87, 77, 51, 0.66);
}

#close_modal {
    cursor: pointer;
    position: relative;
    z-index: 1;
    color: black;
    float: right;
    font-size: 30px;
    bottom: 20px;
    left: 10px;
}
</style>

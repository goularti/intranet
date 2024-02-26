<template>
    <div class="card">
        <h2>Intranet</h2>
        <h3>Como acessar</h3>
        <div><span>Localize e conecte na rede aberta: SERRANO</span></div>
        <div class="mt-3"><img style="filter: invert(1);" src="/layout/images/internet/Wifiserrano.png"
                               alt="Wifit Serrano"></div>
        <div class="conectar">
            <p class="mb-3">Ao conectar, será solicitado o usuário e senha para liberar a internet, preencha no campo
                <span>Método de autenticação por usuário:</span>
            </p>
        </div>

        <div class="funcionario flex align-items-center">
            <img src="/layout/images/internet/login-funcionario.jpg" alt="Funcionário">
            <p class="ml-3 font-italic">Utilize as credenciais da rede, o mesmo que utiliza no computador</p>
        </div>
        <Divider></Divider>
        <div class="visitante flex align-items-center">
            <img src="/layout/images/internet/login-visitante.jpg" alt="Visitante">
            <p class="ml-3 font-italic">Os visitantes devem se autenticar com o <span>Voucher</span> obtido na recepção
            </p>
        </div>
    </div>
</template>

<style scoped>
.conectar span,
.visitante span {
    font-weight: bold;
}

.card .funcionario img,
.card .visitante img {
    height: 500px;
}
</style>
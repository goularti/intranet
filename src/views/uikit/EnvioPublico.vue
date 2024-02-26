<template>
    <div class="card">
        <h2>Envio público</h2>
        <h4>Envio de arquivos por usuários externos</h4>
        <Divider />
        <div class="mt-3">
            <p class="noColor">Está é uma opção para usuários externos que não possuem conta no Owncloud, como por
                exemplo
                serviços
                terceirizados, onde eles precisam enviar arquivos para a empresa</p>
            <p>Para envio de arquivos por usuários externos, no Owncloud, é preciso criar uma pasta e compartilhar no
                modo
                envio público:</p>
        </div>

        <div class="mt-5">
            <p><span>1º -</span> Crie uma pasta:</p>
            <img src="/layout/images/envio-publico/Criar_pasta_owncloud.png" alt="Criar_pasta_owncloud">
        </div>

        <div class="mt-5">
            <p><span>2º -</span> Abra as opções de compartilhamento na pasta criada:</p>
            <img src="/layout/images/envio-publico/Compartilhando_owncloud.png" alt="Compartilhando_owncloud">
        </div>

        <div class="mt-5">
            <p><span>3º -</span> Na opção de compartilhamento, selecione <span class="font-italic">Links Públicos</span>
                e
                clique em <span class="font-italic">Cirar link público</span>:</p>
            <img src="/layout/images/envio-publico/Criar_link_publico_owncloud.png" alt="Criar_link_publico_owncloud">
        </div>

        <div class="mt-5">
            <p><span>4º -</span> Nas opções de Link Público, selecione a opção <span class="font-italic">Somente Enviar (File Drop)</span>
                e clique em <span class="font-italic">Compartilhar</span>:</p>
            <img style="border: 1px solid #ccc"
                 src="/layout/images/envio-publico/Compartilhar_upload_externo_owncloud.png"
                 alt="Compartilhar_upload_externo_owncloud">
        </div>

        <div class="mt-5">
            <p><span>5º -</span> Copie o link e envie para o usuário externo:</p>
            <img src="/layout/images/envio-publico/Copiar_link_owncloud.png" alt="Copiar_link_owncloud">
        </div>

        <div class="mt-5">
            <p><span>6º -</span> Ao abrir o link, o usuário externo visualizará as opções para envio, após o envio será
                exibida uma confirmação:</p>
            <img src="/layout/images/envio-publico/Envio_publico_owncloud.png" alt="Envio_publico_owncloud">
        </div>

        <div class="mt-5">
            <p><span>7º -</span> Após o envio, você visualizará o arquivo que foi enviado dentro da pasta criada:</p>
            <img src="/layout/images/envio-publico/Arquivo_pasta_owncloud.png" alt="Arquivo_pasta_owncloud">
        </div>

        <div class="mt-8 link">
            <a href="https://cloud.leiloesjudiciais.com.br/" target="_blank">Acesso Owncloud</a>
            <i class="pi pi-external-link ml-2"></i>
        </div>
    </div>
</template>
<style scoped>
.card span {
    font-weight: bold;
}

.link a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
}

.link a:hover {
    letter-spacing: 0.1rem;
    transition: 0.2s;
}
</style>
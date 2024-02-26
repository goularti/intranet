<template>
    <div class="card">
        <h2>Compartilhamento Owncloud</h2>
        <Divider />
        <span
            class="font-bold">Existe duas opções de compartilhamento no Owncloud, um por nome de usuário e outro por link</span>

        <div class="mt-8">
            <h3><i class="pi pi-users mr-3"></i>Compartilhando aos usuários ou grupos</h3>
            <Divider />
            <p><span class="font-bold">1º -</span> Abra as opções de compartilhamento na pasta ou arquivo:</p>
            <img src="/layout/images/owncloud/Compartilhando_owncloud.png" alt="Compartilhando_owncloud">

            <div class="mt-5">
                <p><span class="font-bold">2º -</span> Em opções de compartilhamento, clique em <span
                    class="font-bold font-italic">Usuários e Grupos</span> e digite o nome do usuário ou grupo que
                    deseja compartilhar, podendo ser mais de um:
                </p>
                <img src="/layout/images/owncloud/Compartilhar_com_usuario_owncloud.png"
                     alt="Compartilhar_com_usuario_owncloud">
            </div>

            <div class="mt-5">
                <p><span class="font-bold">3º A -</span> Ao digitar o nome, será exibida a lista de usuários
                    disponíveis:</p>
                <img src="/layout/images/owncloud/Localizando_usuario_owncloud.png" alt="Localizando_usuario_owncloud">
            </div>

            <div class="mt-5">
                <p><span class="font-bold">3º B -</span> Para compartilhar para um grupo, digite: <span
                    class="font-italic font-bold">GP</span> que será exibida a lista. <span class="font-italic">Exemplo: gpjuridico.</span>
                </p>
                <img src="/layout/images/owncloud/Compartilhando_grupo.png" alt="Compartilhando_grupo">
            </div>

            <div class="mt-5">
                <p><span class="font-bold">4º -</span> Ao selecionar o nome, o arquivo ou pasta já estará
                    compartilhando:</p>
                <img src="/layout/images/owncloud/Compartilhado_com_usuario_owncloud_.png"
                     alt="Compartilhado_com_usuario_owncloud">
            </div>

            <div class="mt-5">
                <div class="text">
                    <p>O usuário receberá uma notificação por e-mail e visualizará o arquivo ou pasta compartilhado com
                        ele, junto
                        com o nome de quem compartilhou:</p>
                </div>
                <img src="/layout/images/owncloud/Compartilhado_com_voce_owncloud.png"
                     alt="Compartilhado_com_voce_owncloud">
            </div>
        </div>

        <div class="mt-8">
            <h3><i class="pi pi-link mr-3"></i>Compartilhando por link público</h3>
            <Divider />
            <p><span class="font-bold">1º -</span> Abra as opções de compartilhamento na pasta ou arquivo:</p>
            <img src="/layout/images/owncloud/Compartilhando_owncloud.png" alt="Compartilhando_owncloud">

            <div class="mt-5">
                <p><span class="font-bold">2º -</span> Na opção de compartilhamento, selecione <span
                    class="font-bold font-italic">Links Públicos</span> e clique em <span class="font-italic font-bold">Criar link público</span>:
                </p>
                <img src="/layout/images/owncloud/Criar_link_publico_owncloud.png" alt="Criar_link_publico_owncloud">
            </div>

            <div class="mt-5">
                <p><span class="font-bold">3º -</span> Nas opções de Link Público, selecione as opções desejadas,
                    podendo deixar
                    só para visualizar, editar, colocar senha ou definir data para expirar o link; Depois disso clique
                    em <span
                        class="font-bold font-italic">Compartilhar</span>.</p>
                <img src="/layout/images/owncloud/Opcoes_link_publico.png" alt="Opcoes_link_publico">
            </div>

            <div class="mt-5">
                <p><span class="font-bold">4º -</span> Copie o link ou envie por e-mail para o usuário externo:</p>
                <div class="flex align-items-center">
                    <img class="mr-3" src="/layout/images/owncloud/Copiar_link_owncloud.png" alt="Copiar_link_owncloud">
                    <p class="mr-3">ou</p>
                    <img src="/layout/images/owncloud/Email_link_owncloud.png" alt="Compartilhando Owncloud">
                </div>
                <div class="text mt-5">
                    <p>Quando o usuário externo abrir o link, ele visualizará o arquivo (arquivo compartilhado) ou os
                        arquivos da
                        pasta (pasta compartilhada), para baixar:</p>
                </div>
                <div class="flex flex-column align-items-start">
                    <img src="/layout/images/owncloud/Visualizacao_arquivo_link_publico.png"
                         alt="Visualizacao_arquivo_link_publico">
                    <img class="mt-3" src="/layout/images/owncloud/Visualizacao_pasta_link_publico.png"
                         alt="Visualizacao_pasta_link_publico">
                </div>
            </div>
            <div class="mt-8 link">
                <a href="https://cloud.leiloesjudiciais.com.br/" target="_blank">Acesso Owncloud</a>
                <i class="pi pi-external-link ml-2"></i>
            </div>
        </div>
    </div>

</template>

<style scoped>
p, span, .font-italic {
    color: #fff;
}

.text {
    background: rgba(6, 9, 12, 0.5);
    border: 1px solid #06090c;
    margin-bottom: 15px;
    padding: 3px 10px;
    height: 100%;
    width: 100%;
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

.link i {
    scale: 1;
}

i {
    scale: 2;
}
</style>
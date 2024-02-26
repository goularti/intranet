<script>
export default {};
</script>

<template>
    <div class="card">
        <h2>Documentos</h2>
        <Divider />

        <div class="content">
            <p>Abaixo o padrão para que todos utilizem na confecção de documentos:</p>
            <ol>
                <li>Nome da fonte (letra): <span>Book Antiqua</span>;</li>
                <li>Tamanho da fonte: <span>13</span>;</li>
                <li>Parágrafos: Distância de <span>3 cm</span>;</li>
                <li>Espaçamento entrelinhas: <span>1,15</span>;</li>
                <li>Margens: <span class="font-italic">Esquerda: 3cm / Direita: 2cm</span>;</li>
                <li>Enderaçamento: <span>Tudo maíusculo</span>;</li>
                <li>Linhas/Espaço no endereçamento: <span>3 cm antes e 2cm após o processo</span>.</li>
            </ol>
        </div>

        <div class="obs mt-3 flex flex-column">
        <span
            class="font-italic">Obs1. No envio de documentos por e-mail, sempre enviar pdf, para evitar desconfigurações</span>
            <span class="font-italic">Obs1. Anexo o modelo de Petição, com o novo padrão de formatação.
        </span>
        </div>
        <p>Os procedimentos padrão obrigatórios, acima, não serão aplicado quanto já houver um padrão de exigibilidade
            de
            nossos clientes.</p>

        <div class="mt-5 link">
            Descarregar fonte padrão:
            <a href="http://intranet.local/mediawiki/files/bookantiqua.zip">
                Book Antiqua
                <i class="pi pi-download mr-1"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
span {
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
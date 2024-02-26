<template>
    <div class="card">
        <h2>Fontes</h2>
        <divider />
        <p>Para instalar a fonte no sistema:</p>
        <p>No linux, abra o arquivo e clique em instalar</p>
        <img src="/layout/images/fontes/Fontelinux.png" alt="fonte linux">
        <div class="mt-5">
            <p>No Windows, salve as fontes em qualquer lugar no computador, depois clique com o botão direito na fonte
                (que foi salva) e selecione instalar:</p>
            <img src="/layout/images/fontes/Fontewindows.png" alt="fonte windows">
        </div>
        <div class="mt-5">
            <p>Caso o programa não exiba a nova fonte, reinicie o programa pra ele carregar a nova fonte.</p>
        </div>
        <div class="links flex flex-column">
            <a href="http://intranet.local/mediawiki/files/bookantiqua.zip">
                <i class="pi pi-download mr-1"></i>
                <span>Descarregar fonte Book Antiqua</span>
            </a>
            <a href="http://intranet.local/mediawiki/files/GentiumBookBasic.zip">
                <i class="pi pi-download mr-1"></i>
                <span>Descarregar fonte Gentium Book Basic</span>
            </a>
            <a href="http://intranet.local/mediawiki/files/garamond.zip">
                <i class="pi pi-download mr-1"></i>
                <span>Descarregar fonte Garamond</span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.links {
    width: fit-content;
}

.links a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
}

.links a span {
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
}

.links a span:hover {
    letter-spacing: 0.1rem;
    transition: 0.2s
}
</style>
<script setup>
</script>
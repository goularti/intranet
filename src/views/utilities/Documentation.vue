<template>
    <div class="card">
        <h3>Documentação</h3>
        <p class="bg-primary border-round p-3">Esta página cobre a versão Vite, para Nuxt 3 visite o repositório
            <a href="https://github.com/primefaces/sakai-nuxt"
               class="font-bold bg-primary hover:underline">sakai-nuxt</a> em
            vez disso.
        </p>
        <h5>Começando</h5>
        <p>
            Sakai é um modelo de aplicativo para Vue baseado no
            <a href="https://github.com/vuejs/create-vue"
               class="font-medium text-primary hover:underline">create-vue</a>,
            a maneira recomendada de iniciar um projeto <strong>alimentado por Vite</strong>. Para começar, clone o
            <a href="https://github.com/primefaces/sakai-vue" class="font-medium text-primary hover:underline">repositório</a>
            do GithHub e instale as dependências com npm ou yarn.
        </p>
        <CodeHighlight>npm install</CodeHighlight>

        or

        <CodeHighlight>yarn</CodeHighlight>

        <p>
            A próxima etapa é executar o aplicativo usando o script serve e navegar até http://localhost:5173/ para
            exibir o
            aplicativo. É isso. agora você pode começar com o desenvolvimento do seu aplicativo usando o modelo Sakai.
        </p>

        <CodeHighlight>npm run dev</CodeHighlight>

        <h5>Estrutura</h5>
        <p>
            Sakai consiste em algumas pastas, demonstrações e layout foram separados para que você possa remover
            facilmente o
            que não é nessárioo para o seu aplicativo.
        </p>
        <ul class="line-height-3">
            <li><span class="text-primary font-medium">src/layout</span>: Arquivos de layout principais, precisa estar
                presente
            </li>
            <li><span class="text-primary font-medium">src/views</span>: Páginas de demonstrações</li>
            <li><span class="text-primary font-medium">public/demo</span>: Ativos usados em demonstrações</li>
            <li><span class="text-primary font-medium">public/layout</span>: Ativos usados no layout</li>
            <li><span class="text-primary font-medium">src/assets/demo</span>: Estilos usados em demonstrações</li>
            <li><span class="text-primary font-medium">src/assets/layout</span>: Arquivos SCSS do layout principal</li>
        </ul>

        <h5>Menu</h5>
        <p>O menu principal é definido no arquivo <span class="text-primary font-medium">src/layout/AppMenu.vue</span>.
        </p>

        <h5>Tema PrimeVue</h5>
        <p>O tema Sakai é baseado no tema PrimeVue que está sendo usado. O tema padrão é <b>lara-light-indigo</b>.</p>

        <h5>Variáveis SASS</h5>
        <p>Caso você queira personalizar as variáveis de leyout principais, abra o arquivo <b>_variables.scss</b> na
            pasta
            src/layout. Salvar as alterações será refletido instantaneamente no seu navegador.</p>

        <h6>src/layout/_variables.scss</h6>
        <CodeHighlight>
            /* General */
            <br />
            $scale:14px; /* main font size */
            <br />
            $borderRadius:12px; /* border radius of layout element e.g. card, sidebar */
            <br />
            $transitionDuration:.2s; /* transition duration of layout elements e.g. sidebar, overlay menus */
        </CodeHighlight>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 991px) {
    .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
<script setup>
import CodeHighlight from '@/components/CodeHighlight.vue';
</script>
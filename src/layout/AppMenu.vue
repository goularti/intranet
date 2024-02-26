<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Contatos',
        items: [
            { label: 'Ramais', icon: 'pi pi-fw pi-id-card', to: '/uikit/ramais' },
            { label: 'Leiloeiros', icon: 'pi pi-fw pi-users', to: '/uikit/leiloeiros' }
        ]
    },
    {
        label: 'Informações',
        items: [
            { label: 'Wifi', icon: 'pi pi-fw pi-wifi', to: '/utilities/internet', badge: 'NEW' },
            { label: 'E-mails Intranet', icon: 'pi pi-fw pi-envelope', to: '/uikit/endereco_intranet' },
            { label: 'Fontes do sistema', icon: 'pi pi-fw pi-language', to: '/uikit/fontes' },
            { label: 'Fontes e-mail', icon: 'pi pi-fw pi-language', to: '/uikit/fonte_email' },
            { label: 'Certificado expirado', icon: 'pi pi-fw pi-file-excel', to: '/uikit/certificado_expirado' }
        ]
    },
    {
        label: 'Owncloud',
        items: [
            { label: 'Carregamento', icon: 'pi pi-fw pi-cloud-download', to: '/uikit/envio_privado' },
            { label: 'Compartilhamento', icon: 'pi pi-fw pi-cloud-upload', to: '/uikit/compartilhamento' },
            { label: 'Usuários Externos', icon: 'pi pi-fw pi-users', to: '/uikit/envio_publico', preventExact: true }
        ]
    },
    {
        label: 'Procedimentos',
        items: [
            { label: 'Padronizando Documentos', icon: 'pi pi-fw pi-tag', to: '/uikit/padronizacao' }

        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>

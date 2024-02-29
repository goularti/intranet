<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo flex align-items-center p-2">
            <div class="brand flex w-full justify-content-evenly">
                <img style="scale: 1.5" src="/layout/images/networking.png" alt="logo" />
                <divider layout="vertical" />
                <span>INTRANET</span>
            </div>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
            </button>
            <span v-if="username" class="flex align-items-center ml-3">{{ username }}</span>
            <button @click="onDocumentsClick()" class="p-link layout-topbar-button">
                <i class="pi pi-book"></i>
                <span>Documentação</span>
            </button>
            <div class="layout-topbar-panel" v-if="topbarMenuActive">
                <div class="layout-topbar-panel-content">
                    <button @click="logout" class="p-link layout-topbar-button" title="Sair da conta">
                        <i class="pi pi-power-off"></i>
                        <span>Sair</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};

const onDocumentsClick = () => {
    const storedUsername = localStorage.getItem('user');
    if (storedUsername === 'ubuntu') {
        topbarMenuActive.value = false;
        router.push('/documentation');
    } else {
        router.push({ name: 'accessDenied' });
    }
};

const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};

const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};

const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

const logout = () => {
    localStorage.removeItem('sessionId');
    localStorage.removeItem('user');
    localStorage.removeItem('cn');
    localStorage.removeItem('mail');
    localStorage.clear();
    router.push({ name: 'login' });
};

const username = ref(localStorage.getItem('cn'));
</script>

<style lang="scss" scoped>

</style>

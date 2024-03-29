import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import isAuthenticated from '@/service/GuardService';
import Login from '@/views/pages/auth/Login.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/ramais',
                    name: 'ramais',
                    component: () => import('@/views/uikit/Ramais.vue')
                },
                {
                    path: '/uikit/leiloeiros',
                    name: 'leiloeiros',
                    component: () => import('@/views/uikit/Leiloeiros.vue')
                },
                {
                    path: '/uikit/padronizacao',
                    name: 'padronizacao',
                    component: () => import('@/views/uikit/Padronizacao.vue')
                },
                {
                    path: '/uikit/certificado_expirado',
                    name: 'certificado_expirado',
                    component: () => import('@/views/uikit/CertificadoExpirado.vue')
                },
                {
                    path: '/uikit/envio_publico',
                    name: 'envio_publico',
                    component: () => import('@/views/uikit/EnvioPublico.vue')
                },
                {
                    path: '/uikit/compartilhamento',
                    name: 'compartilhamento',
                    component: () => import('@/views/uikit/Compartilhamento.vue')
                },
                {
                    path: '/uikit/fonte_email',
                    name: 'fonte_email',
                    component: () => import('@/views/uikit/FonteEmail.vue')
                },
                {
                    path: '/uikit/endereco_intranet',
                    name: 'endereco_intranet',
                    component: () => import('@/views/uikit/EnderecosEmailIntranet.vue')
                },
                {
                    path: '/uikit/fontes',
                    name: 'fontes',
                    component: () => import('@/views/uikit/Fontes.vue')
                },

                {
                    path: '/utilities/internet',
                    name: 'internet',
                    component: () => import('@/views/utilities/Internet.vue')
                },
                {
                    path: '/uikit/envio_privado',
                    name: 'envio_privado',
                    component: () => import('@/views/uikit/EnvioPrivado.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
            ]
        },
        {
            path: '/auth/login',
            name: 'login',
            component: Login
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.name === 'login' && isAuthenticated()) {
        next({ name: 'dashboard' });
    } else if (to.name !== 'login' && !isAuthenticated()) {
        next({ name: 'login' });
    } else {
        next();
    }
});

export default router;

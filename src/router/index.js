import {createRouter, createWebHashHistory} from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import isAuthenticated from "@/service/GuardService";
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
                    path: '/uikit/menu',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
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
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
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
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.name === 'login' && isAuthenticated()) {
        next({name: 'dashboard'});
    } else if (to.name !== 'login' && !isAuthenticated()) {
        next({name: 'login'});
    } else {
        next();
    }
});

export default router;

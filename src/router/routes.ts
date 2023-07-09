import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/scan', component: () => import('pages/ScanQr.vue') },
<<<<<<< HEAD
      { path: '/checkout', component: () => import('pages/checkout-session.vue') },
      { path: '/stripe_success', component: () => import('src/pages/stripe-success.vue') },
      { path: '/stripe_cancel', component: () => import('src/pages/stripe-cancel.vue') },
=======
      { path: '/login', component: () => import('pages/LoginPage.vue') },
>>>>>>> 998bd6ae8eb64ce5693c73329b7b43c30f41ac20
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

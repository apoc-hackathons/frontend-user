import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/scan', component: () => import('pages/ScanQr.vue') },
      {
        path: '/checkout',
        component: () => import('pages/checkout-session.vue'),
      },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
    ],
  },

  {
    path: '/success',
    component: () => import('layouts/SuccessLayout.vue'),
    children: [
      { path: '', component: () => import('pages/stripe-success.vue') },
    ],
  },

  {
    path: '/cancelled',
    component: () => import('layouts/SuccessLayout.vue'),
    children: [
      { path: '', component: () => import('pages/stripe-cancel.vue') },
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

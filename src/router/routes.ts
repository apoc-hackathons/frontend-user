import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/scan', component: () => import('pages/ScanQr.vue') },
      { path: '/checkout', component: () => import('pages/checkout-session.vue') },
      { path: '/stripe_success', component: () => import('src/pages/stripe-success.vue') },
      { path: '/stripe_cancel', component: () => import('src/pages/stripe-cancel.vue') },
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

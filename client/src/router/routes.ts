import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {requiresAuth: true},
    children: [
      { path: '', redirect: 'cases' },
      {
        path: 'podcast',
        component: () => import('pages/podcast/Home.vue'),
      },
      {
        path: 'cases',
        component: () => import('pages/cases/Home.vue'),
      },
      {
        path: 'profile',
        component: () => import ('pages/Profile.vue')
      }
    ],
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  {
    path: '/demo',
    component: () => import('layouts/DemoLayout.vue'),
    children: [{ path: '', component: () => import('pages/DemoPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

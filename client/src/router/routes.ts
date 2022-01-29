import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/Index.vue'), },
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
        component: () => import('pages/Profile.vue')
      }
    ],
  },
  {
    path: '/messages',
    component: () => import('layouts/SocialLayout.vue'),
    meta: { requiresAuth: true },
    children: [
    ],
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/verification', component: () => import('pages/user/Verification.vue'), meta: { requiresAuth: true } },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true, requiredPermissions: ['admin'] },
    children: [
      { path: 'permissions', component: () => import('pages/auth/Permissions.vue') },
      { path: 'user-roles', component: () => import('pages/auth/UserRoles.vue') },
    ]
  },
  {
    path: '/alerts',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true, requiredPermissions: ['alerts.read'] },
    children: [
      { path: '', component: () => import('pages/alerts/AlertList.vue') },
      { path: ':alertID', component: () => import('pages/alerts/AlertView.vue'), props: true },
    ]
  },
  {
    path: '/register-user',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true, requiredPermissions: ['users.write'] },
    children: [
      { path: '', component: () => import('pages/registerUsers/RegisterUser.vue') },
    ]
  },
  {
    path: '/demo',
    component: () => import('layouts/DemoLayout.vue'),
    children: [{ path: '', component: () => import('pages/DemoPage.vue') }],
  },
  {
    path: '/forbidden',
    component: () => import('pages/Error403.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

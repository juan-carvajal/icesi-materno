import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { StateInterface } from '../store';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route<StateInterface>(function (/* { store, ssrContext } */ store) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeEach((to, from, next) => {

    const isLoggedIn = store.store.state.auth.isLoggedIn
    const requiredAuth = to.meta.requiresAuth as boolean
    const isEmailVerified = store.store.state.auth.isEmailVerified
    const requiredPermissions = to.meta.requiredPermissions as string[]

    if (requiredPermissions && requiredPermissions.length > 0) {
      const userPermissions = store.store.state.auth.permissions

      const allFullfilled = userPermissions.includes('admin') || requiredPermissions.every(i => userPermissions.includes(i))
      if (!allFullfilled) {
        next({ path: '/forbidden', query: { redirect: to.path, requiredPermissions } })
        return
      }
    }

    if (requiredAuth && !isLoggedIn) {
      next({ path: '/login', query: { redirect: to.path } })
      return
    }

    if (isLoggedIn && !isEmailVerified) {
      if (to.path === '/verification') {
        next()
        return
      }

      next({ path: '/verification' })
      return
    }

    next()
  });

  return Router;
});

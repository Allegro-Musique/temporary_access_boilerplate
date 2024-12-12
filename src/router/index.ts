import { createRouter, createWebHistory, RouteLocationNormalizedLoaded, NavigationGuardNext } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: { template: '<div>Home</div>' },
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  console.log(`Navigating from ${from.path} to ${to.path}`);

  if (requiresAuth) {
    const key = to.query.key as string
    const isAuthenticated = await authStore.checkAuthentication(key)
    if (!isAuthenticated) {
      next({ path: '/', query: { from: from.path } }) // Store the origin path
      return
    }
  }
  next()
})

export default router
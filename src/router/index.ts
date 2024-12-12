import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Upload from '../views/Upload.vue'
import AccessDenied from '../views/AccessDenied.vue'
import NotFound from '../views/NotFound.vue'
import TeacherRegistration from '../views/TeacherRegistration.vue'

const routes = [
  {
    path: '/',
    redirect: '/upload'
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
    meta: { requiresAuth: true }
  },
  {
    path: '/access-denied',
    name: 'access-denied',
    component: AccessDenied
  },
  {
    path: '/teacher-registration',
    name: 'teacher-registration',
    component: TeacherRegistration
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    const key = to.query.key as string
    const isAuthenticated = await authStore.checkAuthentication(key)
    if (!isAuthenticated) {
      next({ name: 'access-denied' }) // Redirect to Access Denied page if authentication fails
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
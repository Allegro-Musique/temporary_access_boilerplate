import { createRouter, createWebHistory } from 'vue-router'
import Upload from '../views/Upload.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})

export default router
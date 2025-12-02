import { createRouter, createWebHistory } from 'vue-router'
import PageTemplate from '@/views/PageTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/PageOne' },
    {
      path: '/:page',
      component: PageTemplate,
      props: (route) => ({
        page: route.params.page,
        sectionId: null,
      }),
    },
    {
      path: '/:page/section/:sectionId',
      component: PageTemplate,
      props: (route) => ({
        page: route.params.page,
        sectionId: Number(route.params.sectionId),
      }),
    },
  ],
})

export default router

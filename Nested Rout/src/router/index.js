import { createRouter, createWebHistory } from 'vue-router'
import PageTemplate from '@/views/PageTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/PageOne' },

    {
      path: '/PageOne',
      component: PageTemplate,
      props: { title: 'Welcome to Page 1' },
    },
    {
      path: '/PageTwo',
      component: PageTemplate,
      props: { title: 'Welcome to Page 2' },
    },
    {
      path: '/PageThree',
      component: PageTemplate,
      props: { title: 'Welcome to Page 3' },
    },
  ],
})

export default router

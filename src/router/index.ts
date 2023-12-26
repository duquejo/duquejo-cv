import { createRouter, createWebHistory } from 'vue-router';

export enum ROUTES {
  RESUME = 'resume',
  SERVICES = 'services',
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.RESUME,
      component: () => import('../views/ResumeView.vue'),
    },
    {
      path: `/${ROUTES.SERVICES}`,
      name: ROUTES.SERVICES,
      component: () => import('../views/TechStackView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: ROUTES.RESUME }),
    }
  ]
})

export default router;
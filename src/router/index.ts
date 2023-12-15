import { createRouter, createWebHistory } from 'vue-router';

export enum ROUTES {
  RESUME = 'resume',
  SERVICES = 'services',
  BLOG = 'blog',
  CONTACT = 'contact',
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
    // {
    //   path: `/${ROUTES.BLOG}`,
    //   name: ROUTES.BLOG,
    //   component: () => import('../views/BlogView.vue'),
    // },
    // {
    //   path: `/${ROUTES.CONTACT}`,
    //   name: ROUTES.CONTACT,
    //   component: () => import('../views/ContactView.vue'),
    // },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: ROUTES.RESUME }),
    }
  ]
})

export default router;
import { createRouter, createWebHistory } from 'vue-router';

export enum ROUTES {
  RESUME = 'resume',
  SERVICES = 'services',
};

export enum ROUTES_CO {
  RESUME = 'curriculo',
  SERVICIOS = 'servicios',
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
      path: '/',
      name: ROUTES_CO.RESUME,
      component: () => import('../views/ResumeView.vue'),
    },
    {
      path: `/${ROUTES.SERVICES}`,
      name: ROUTES.SERVICES,
      component: () => import('../views/TechStackView.vue'),
    },
    {
      path: `/${ROUTES_CO.SERVICIOS}`,
      name: ROUTES_CO.SERVICIOS,
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
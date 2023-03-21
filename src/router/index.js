import { createRouter, createWebHistory } from 'vue-router';

import NewUser from '../Views/NewUser.vue';
import NewCategory from '../Views/NewCategory.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'NewUser',
      component: NewUser,
    },
    {
      path: '/new-category',
      name: 'NewCategory',
      component: NewCategory,
    },
  ],
});

export default router;

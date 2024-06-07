import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Coffees from '../views/Coffees.vue';
import Coffee from '../views/Coffee.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coffees',
    name: 'Coffees',
    component: Coffees
  },
  {
    path: '/coffees/:coffee',
    name: 'Coffee',
    component: Coffee
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

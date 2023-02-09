import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PaymentView from '../views/Payment.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Início',
    },
  },
  {
    path: '/events',
    name: 'event',
    component: () => import('../views/Event.vue'),
    meta: {
      title: 'Eventos',
    },
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue'),
    meta: {
      title: 'Acampantes',
    },
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView,
    meta: {
      title: 'Pagamentos',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? `${to.meta.title} | MAG SBC` : 'MAG SBC';
  });
});

export default router;

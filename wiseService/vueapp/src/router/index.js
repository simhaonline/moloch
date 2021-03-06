import Vue from 'vue';
import VueRouter from 'vue-router';
import Wise from '../components/Wise.vue';
import CreateConfig from '../components/CreateConfig.vue';
import Help from '../components/Help.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Wise',
    component: Wise
  },
  {
    path: '/create-config',
    name: 'Create config',
    component: CreateConfig
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

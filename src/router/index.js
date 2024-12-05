import { createRouter, createWebHistory } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


const routes = [
    {
      path: '/',
      name:'Header',
      component:Header,
    },
    {
      path: '/',
      name:'Footer',
      component:Footer,
      
    },
  ];
  

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
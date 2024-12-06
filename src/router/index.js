import { createRouter, createWebHistory } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

// import Page1 from '../views/Page1.vue';  //計畫目標
// import Page2 from '../views/Page2.vue';  //師資培育
// import Page3 from '../views/Page3.vue';  //學生培育


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
     
    // { path: '/page1', component: Page1 },
    // { path: '/page2', component: Page2 },
    // { path: '/page3', component: Page3 },
  ];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
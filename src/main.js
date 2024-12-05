import { createApp } from 'vue';
import { vuetify } from '@/plugins/vuetify';
import App from '@/App.vue';
import routes from '@/router';
// import '@/assets/fonts/font.css';

createApp(App).use(vuetify).use(routes).mount('#app');
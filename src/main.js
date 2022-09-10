import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueMask from '@devindex/vue-mask';
import App from './App.vue'
import './assets/css/main.css'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueMask);
app.mount('#app');

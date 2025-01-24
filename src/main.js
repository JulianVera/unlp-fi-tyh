// vue
import { createApp } from 'vue';
import router from './router';

// locales
import App from './App.vue';
import CanchaIcon from '@/components/icons/iconCancha.vue';
import AccountCircleIcon from 'vue-material-design-icons/AccountCircle.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';

// estilos
import './assets/main.css';

// app
const app = createApp(App);

// router
app.use(router);

// iconos
app.component('MenuIcon', MenuIcon);
app.component('CanchaIcon', CanchaIcon);
// app.component('MenuIcon', MenuIcon);
app.component('AccountCircleIcon', AccountCircleIcon);
app.component('ChevronLeftIcon', ChevronLeftIcon);
app.component('ChevronRightIcon', ChevronRightIcon);

// montaje de la app
app.mount('#app');
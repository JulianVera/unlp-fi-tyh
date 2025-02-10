// vue
import { createApp } from 'vue';
import router from './router';

// locales
import CanchaIcon from '@/components/icons/iconCancha.vue';
import AccountCircleIcon from 'vue-material-design-icons/AccountCircle.vue';
import AccountGroupOutlineIcon from 'vue-material-design-icons/AccountGroupOutline.vue';
import BookClockIcon from 'vue-material-design-icons/BookClock.vue';
import SoccerFieldIcon from 'vue-material-design-icons/SoccerField.vue';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import App from './App.vue';

// estilos
import './assets/main.css';

// app
const app = createApp(App);

// router
app.use(router);

// iconos
app.component('SoccerFieldIcon', SoccerFieldIcon);
app.component('PlusIcon', PlusIcon);
app.component('MenuIcon', MenuIcon);
app.component('BookClockIcon', BookClockIcon);
app.component('CanchaIcon', CanchaIcon);
app.component('AccountGroupOutlineIcon', AccountGroupOutlineIcon);
// app.component('MenuIcon', MenuIcon);
app.component('AccountCircleIcon', AccountCircleIcon);
app.component('ChevronLeftIcon', ChevronLeftIcon);
app.component('ChevronRightIcon', ChevronRightIcon);

// montaje de la app
app.mount('#app');

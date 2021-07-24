import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import VueMoment from 'vue-moment';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
const moment = require('moment');
import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMoment, { moment });

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});

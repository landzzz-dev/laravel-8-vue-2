require('./bootstrap');

import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from './router';
import store from './vuexStore';
import App from './templates/App';
import { createPinia, PiniaVuePlugin  } from 'pinia';

Vue.use(Vuetify);
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

const app = new Vue({
    el: '#app',
    store,
    pinia,
    router:Router,
    vuetify: new Vuetify(),
    render: h=>h(App)
});
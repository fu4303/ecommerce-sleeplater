/* eslint-disable import/first */
import Vue from 'vue';

// Feather icons
import { ChevronUpIcon, ChevronDownIcon, BarChartIcon, GridIcon, ShoppingCartIcon, XIcon, InstagramIcon, TwitterIcon, MailIcon } from 'vue-feather-icons';
Vue.component('chevron-up-icon', ChevronUpIcon);
Vue.component('chevron-down-icon', ChevronDownIcon);
Vue.component('menu-icon', BarChartIcon); // Goes sideways
Vue.component('grid-icon', GridIcon);
Vue.component('shopping-cart-icon', ShoppingCartIcon);
Vue.component('close-icon', XIcon);
Vue.component('instagram-icon', InstagramIcon);
Vue.component('twitter-icon', TwitterIcon);
Vue.component('mail-icon', MailIcon);

import Loader from './loader/loader.vue';
Vue.component('loader', Loader);

import NavButtons from './nav-buttons/nav-buttons.vue';
Vue.component('nav-buttons', NavButtons);
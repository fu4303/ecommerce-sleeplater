/* eslint-disable import/first */

// Polyfills
import 'babel-polyfill';
import 'promise-polyfill';
import 'whatwg-fetch';

import './index.html';
import './main.sass';

import Vue from 'vue';

import './components';
import './plugins';
import router from './router';
import store from './store';


// Fix for bad iOS scrolling behavior
function iOSResize() { document.body.style.height = `${window.innerHeight}px`; }
if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
  iOSResize();
  window.addEventListener('resize', iOSResize);
}


// Main app
window.app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    navigation: require('./navigation/navigation.vue').default,
  },
});

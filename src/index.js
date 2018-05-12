/* eslint-disable import/first */
import './index.html';
import './main.sass';

import './components';
import router from './router';

import Vue from 'vue';

window.app = new Vue({
  el: '#app',
  router,

  data: {
    transitionName: '',
    transitionMode: '',
  },

  watch: {
    // Vue route changed
    $route(to, from) {
      if (from.name === 'home') [this.transitionName, this.transitionMode] = ['period-scale', 'out-in'];
      else [this.transitionName, this.transitionMode] = ['', ''];
    },
  },
});

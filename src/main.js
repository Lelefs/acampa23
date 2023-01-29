import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './boot/snackbar';
import './boot/vmask';
import './boot/vuelidate';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');

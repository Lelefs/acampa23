import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: false,
    },
    themes: {
      light: {
        background: '#E3F2FD',
      },
    },
  },
};

export default new Vuetify(opts);

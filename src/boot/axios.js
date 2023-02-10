/* eslint-disable camelcase */
import Vue from 'vue';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api-cmn-pagamentos-evento.herokuapp.com/api',
});

Vue.prototype.$axios = axios;

export const baseUrl = 'https://api-cmn-pagamentos-evento.herokuapp.com/api';
export default axios;

<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <router-view />

    <v-snackbar
      v-for="(item, index) in snackbars"
      :key="`snackbars_${index}`"
      v-bind="item"
      @input="$store.commit('app/snackbarDelete', index)"
    >
      {{ item.message }}
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapState('app', ['snackbars']),

    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss">
@import './css/base.scss';
</style>

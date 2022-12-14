<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss">
@import './css/base.scss';

.main-app {
  background-color: #e3f2fd;
}
</style>

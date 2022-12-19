<template>
  <footer class="div-midias-sociais">
    <v-row>
      <v-col cols="12">
        <h2 class="group-title">FALE COM A GENTE</h2>
        <span class="group-subtitle font-28">Entre em contato através das nossas redes sociais</span>
      </v-col>
      <v-col cols="12" md="4">fdfdsfdsfds</v-col>
      <v-col cols="12" md="4">fdfdsfdsfds</v-col>
      <v-col cols="12" md="4">fdfdsfdsfds</v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: 'MidiasComponent',
};
</script>

<style lang="scss">
.div-midias-sociais {
  background: #f3f3f4;
  padding: 56px 7.125rem;
  margin-top: 60px;
}

@media only screen and (max-width: 720px) {
  .div-midias-sociais {
    margin-top: 50px;
    padding: 25px 1.5rem;
  }
}
</style>

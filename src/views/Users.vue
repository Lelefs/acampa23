<template>
  <v-card max-width="650" class="mx-auto">
    <v-card-title>
      Acampantes
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="usersFormatted"
      :search="search"
      disable-pagination
      hide-default-footer
      sort-by="nome"
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'About',

  data: () => ({
    headers: [
      { text: 'Nome', align: 'start', value: 'nome' },
      { text: 'Quarto', align: 'start', value: 'quarto' },
      { text: 'Ônibus', align: 'start', value: 'onibus' },
    ],
    search: '',
  }),

  computed: {
    ...mapGetters('users', ['users']),

    usersFormatted() {
      return this.users.map(u => ({
        ...u,
        nome: u.nome.toLowerCase().replace(/^[a-z]/i, str => str.toUpperCase()),
        nomeCelula: u.nomeCelula.toLowerCase().replace(/^[a-z]/i, str => str.toUpperCase()),
        valorPago: Number(u.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      }));
    },
  },
};
</script>

<style lang="scss">
td.text-start {
  text-transform: capitalize !important;
}
</style>

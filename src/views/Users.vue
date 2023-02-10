<template>
  <v-card>
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
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'About',

  data: () => ({
    search: '',
    headers: [
      { text: 'Nome', align: 'start', value: 'nome' },
      { text: 'Célula', align: 'start', value: 'nomeCelula' },
      { text: 'Valor pago', align: 'start', value: 'valorPago' },
      { text: 'Quarto', align: 'start', value: 'quarto' },
      { text: 'Ônibus', align: 'start', value: 'onibus' },
    ],
  }),

  computed: {
    ...mapGetters('users', ['users']),

    usersFormatted() {
      return this.users.map(u => ({
        ...u,
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

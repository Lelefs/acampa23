<template>
  <v-card>
    <v-card-title>
      Acampantes
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      disable-pagination
      hide-default-footer
    ></v-data-table>
  </v-card>
</template>

<script>
import { users } from '@/store/users';

export default {
  name: 'About',

  data: () => ({
    search: '',
    headers: [
      { text: 'Nome', align: 'start', value: 'nome' },
      { text: 'Célula', align: 'start', value: 'nomeCelula' },
      { text: 'Quarto', align: 'start', value: 'quarto' },
      { text: 'Ônibus', align: 'start', value: 'onibus' },
    ],
    users,
  }),
};
</script>

<style lang="scss">
td.text-start {
  text-transform: capitalize !important;
}
</style>

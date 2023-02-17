<template>
  <v-card max-width="650" class="mx-auto">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green mt-6 mb-3 mx-auto" dark v-bind="attrs" v-on="on"> MAPA DO LOCAL </v-btn>
          </template>

          <v-card>
            <v-toolbar dark color="green">
              <v-toolbar-title>Localização</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <div class="dialog-div__img">
              <v-img src="img/locais/Mapa.png" alt="Mapa local"></v-img>
            </div>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

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
    dialog: false,
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

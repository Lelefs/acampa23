<template>
  <div>
    <h1 class="text-center mb-2">AGORA</h1>
    <v-card color="grey lighten-4" elevation="5">
      <div class="d-flex flex-no-wrap">
        <div class="d-flex flex-column justify-center align-center">
          <v-card-title class="text-h5" v-text="currentEvent.hourStart"></v-card-title>
          <v-card-subtitle v-text="currentEvent.hourEnd"></v-card-subtitle>
        </div>

        <div class="d-flex flex-column justify-center align-center flex-grow-1">
          <v-card-text class="card-text-event">
            <div class="d-flex flex-column mx-auto">
              <h3>{{ currentEvent.title }}</h3>

              <div class="d-flex align-end mt-2" v-if="currentEvent.location">
                <v-icon class="mr-1">mdi-map-marker-outline</v-icon>
                <span class="info-event-text"> {{ currentEvent.location }} </span>
              </div>

              <div class="d-flex align-end mt-2" v-if="currentEvent.responsible">
                <v-icon class="mr-1">mdi-account-outline</v-icon>
                <span class="info-event-text"> {{ currentEvent.responsible }} </span>
              </div>

              <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="green mt-3" dark v-bind="attrs" v-on="on"> Ver localização </v-btn>
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
                    <v-img :src="currentImg" alt="Localização evento"></v-img>
                  </div>
                </v-card>
              </v-dialog>
            </div>
          </v-card-text>
        </div>

        <div class="d-none d-sm-flex flex-column justify-center align-center pa-3">
          <h2>{{ currentEvent.period }}</h2>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CurrentEvent',

  props: {
    currentEvent: Object,
  },

  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    currentImg() {
      switch (this.currentEvent.location) {
        case 'Nave':
          return 'img/locais/Templo.png';
        case 'Restaurante':
          return 'img/locais/Refeitorio.png';
        case 'Ginásio poliesportivo':
          return 'img/locais/Ginasio.png';
        case 'Estacionamento':
          return 'img/locais/Estacionamento.png';
        default:
          return 'img/locais/Mapa.png';
      }
    },
  },
};
</script>

<style lang="scss">
.card-text-event {
  border-right: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;

  > div {
    width: fit-content;
  }
}

.info-event-text {
  font-size: 16px;
  line-height: 18px;
}

.dialog-div__img {
  @media only screen and (max-width: 959px) {
    margin-top: 30%;
  }
}
</style>

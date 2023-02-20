<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <v-icon large class="mr-1">mdi-calendar-range-outline</v-icon>
          <span class="title"> {{ today }} </span>
        </div>

        <div class="d-flex align-center">
          <v-icon large class="mr-1">mdi-clock-outline</v-icon>
          <span class="title"> {{ hours }} </span>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <main class="white d-flex flex-column pa-4 gap-16 rounded-lg rounded-b-0">
          <CurrentEvent v-if="futureEvents.length" :currentEvent="futureEvents[0]" />

          <h2 class="text-center mt-4 mb-2">Eventos do dia</h2>
          <v-card v-for="(item, i) in items" :key="i" color="grey lighten-4">
            <div class="d-flex flex-no-wrap">
              <div class="d-flex flex-column justify-center align-center">
                <v-card-title class="text-h5" v-text="item.hourStart"></v-card-title>
                <v-card-subtitle v-text="item.hourEnd"></v-card-subtitle>
              </div>

              <template v-if="item.title !== 'Campeonato futebol' && item.title !== 'Campeonato futebol - FEMININO'">
                <div class="d-flex flex-column justify-center align-center flex-grow-1">
                  <v-card-text class="card-text-event">
                    <div class="d-flex flex-column mx-auto">
                      <h3 class="text-center">{{ item.title }}</h3>

                      <div class="d-flex align-end justify-center mt-2" v-if="item.location">
                        <v-icon class="mr-1">mdi-map-marker-outline</v-icon>
                        <span class="info-event-text"> {{ item.location }} </span>
                      </div>

                      <div class="d-flex align-end justify-center mt-2" v-if="item.responsible">
                        <v-icon class="mr-1">mdi-account-outline</v-icon>
                        <span class="info-event-text"> {{ item.responsible }} </span>
                      </div>
                    </div>
                  </v-card-text>
                </div>

                <div class="d-none d-sm-flex flex-column justify-center align-center pa-3">
                  <h2>{{ item.period }}</h2>
                </div>
              </template>

              <template v-else>
                <v-card-text class="d-flex flex-column justify-center align-center card-text-event">
                  <div class="d-flex flex-column mx-auto">
                    <h3 class="text-center">{{ item.title }} - {{ item.game }}</h3>

                    <div class="d-flex align-end justify-center mt-2" v-if="item.location">
                      <v-icon class="mr-1">mdi-map-marker-outline</v-icon>
                      <span class="info-event-text"> {{ item.location }} </span>
                    </div>
                  </div>

                  <div class="d-flex mx-auto div-info-times mt-2">
                    <div class="d-flex flex-column text-center">
                      <h4 class="my-2">{{ item.time1 }}</h4>
                      <template v-if="item.participantes1?.length">
                        <span v-for="(jogador, i) in item.participantes1" :key="i">{{ jogador }}</span>
                      </template>
                    </div>
                    <span class="mt-2">X</span>
                    <div class="d-flex flex-column text-center">
                      <h4 class="my-2">{{ item.time2 }}</h4>
                      <template v-if="item.participantes2?.length">
                        <span v-for="(jogador, i) in item.participantes2" :key="i">{{ jogador }}</span>
                      </template>
                    </div>
                  </div>
                </v-card-text>
              </template>
            </div>
          </v-card>
        </main>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dateFormatted, hourFormatted } from '@/utils/formatDates';
import { mapGetters } from 'vuex';

export default {
  name: 'Event',

  components: {
    CurrentEvent: () => import('@/components/CurrentEvent'),
  },

  data() {
    return {
      dataAtual: new Date(),
      dataFixa: '2023-02-19 14:35:00',
      hours: hourFormatted(),
      today: dateFormatted(),
    };
  },

  computed: {
    ...mapGetters('events', ['events']),

    futureEvents() {
      const now = new Date(this.dataAtual);
      const currentDay = now.getDate();
      let eventsFormatted = [];
      const futuros = [];

      switch (currentDay) {
        case 18:
          eventsFormatted = this.events.sabado.map(e => ({
            ...e,
            timestampStart: new Date(`2023-02-18 ${e.hourStart}`).getTime(),
            timestampEnd: new Date(`2023-02-18 ${e.hourEnd}`).getTime(),
          }));
          break;
        case 19:
          eventsFormatted = this.events.domingo.map(e => ({
            ...e,
            timestampStart: new Date(`2023-02-19 ${e.hourStart}`).getTime(),
            timestampEnd: new Date(`2023-02-19 ${e.hourEnd}`).getTime(),
          }));
          break;
        case 20:
          eventsFormatted = this.events.segunda.map(e => ({
            ...e,
            timestampStart: new Date(`2023-02-20 ${e.hourStart}`).getTime(),
            timestampEnd: new Date(`2023-02-20 ${e.hourEnd}`).getTime(),
          }));
          break;
        case 21:
          eventsFormatted = this.events.terca.map(e => ({
            ...e,
            timestampStart: new Date(`2023-02-21 ${e.hourStart}`).getTime(),
            timestampEnd: new Date(`2023-02-21 ${e.hourEnd}`).getTime(),
          }));
          break;
        default:
          break;
      }

      eventsFormatted.forEach(evento => {
        if (now.getTime() < evento.timestampEnd && now.getTime() >= evento.timestampStart) {
          futuros.push(evento);
        }
      });

      return futuros;
    },

    items() {
      const now = new Date(this.dataAtual);
      const currentDay = now.getDate();

      switch (currentDay) {
        case 18:
          return this.events.sabado;
        case 19:
          return this.events.domingo;
        case 20:
          return this.events.segunda;
        case 21:
          return this.events.terca;
        default:
          return [
            {
              hourStart: '00:00',
              hourEnd: '00:00',
              title: 'Sem evento no momento',
            },
          ];
      }
    },
  },
};
</script>

<style lang="scss">
.v-card__title.text-h5 {
  min-width: 93px;

  @media only screen and (max-width: 720px) {
    min-width: 85px;
  }
}

.span-date-time {
  line-height: 100%;
  color: #000;
  font-size: 18px;
}

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

.label-current-event {
  margin-bottom: 8px;
  width: fit-content;
}

.dialog-img {
  max-height: calc(100vh - 64px);
  margin: auto;

  @media only screen and (max-width: 959px) {
    max-height: calc(100vh - 56px);
  }
}

.div-info-times {
  gap: 1rem;

  h4 {
    font-size: 18px;
  }
}
</style>

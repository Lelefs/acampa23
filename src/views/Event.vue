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
          <h1 v-if="futureEvents.length" class="text-center">AGORA</h1>
          <v-card v-if="futureEvents.length" color="grey lighten-4" elevation="5">
            <div class="d-flex flex-no-wrap">
              <div class="d-flex flex-column justify-center align-center">
                <v-card-title class="text-h5" v-text="futureEvents[0].hourStart"></v-card-title>
                <v-card-subtitle v-text="futureEvents[0].hourEnd"></v-card-subtitle>
              </div>

              <div class="d-flex flex-column justify-center align-center flex-grow-1">
                <v-card-text class="card-text-event">
                  <div class="d-flex flex-column mx-auto">
                    <h3>{{ futureEvents[0].title }}</h3>

                    <div class="d-flex align-end mt-2" v-if="futureEvents[0].location">
                      <v-icon class="mr-1">mdi-map-marker-outline</v-icon>
                      <span class="info-event-text"> {{ futureEvents[0].location }} </span>
                    </div>

                    <div class="d-flex align-end mt-2" v-if="futureEvents[0].responsible">
                      <v-icon class="mr-1">mdi-account-outline</v-icon>
                      <span class="info-event-text"> {{ futureEvents[0].responsible }} </span>
                    </div>
                  </div>
                </v-card-text>
              </div>

              <div class="d-none d-sm-flex flex-column justify-center align-center pa-3">
                <h2>{{ futureEvents[0].period }}</h2>
              </div>
            </div>
          </v-card>

          <h2 class="text-center mt-4 mb-2">Eventos do dia</h2>
          <v-card v-for="(item, i) in items" :key="i" color="grey lighten-4">
            <div class="d-flex flex-no-wrap">
              <div class="d-flex flex-column justify-center align-center">
                <v-card-title class="text-h5" v-text="item.hourStart"></v-card-title>
                <v-card-subtitle v-text="item.hourEnd"></v-card-subtitle>
              </div>

              <div class="d-flex flex-column justify-center align-center flex-grow-1">
                <v-card-text class="card-text-event">
                  <div class="d-flex flex-column mx-auto">
                    <h3>{{ item.title }}</h3>

                    <div class="d-flex align-end mt-2" v-if="item.location">
                      <v-icon class="mr-1">mdi-map-marker-outline</v-icon>
                      <span class="info-event-text"> {{ item.location }} </span>
                    </div>

                    <div class="d-flex align-end mt-2" v-if="item.responsible">
                      <v-icon class="mr-1">mdi-account-outline</v-icon>
                      <span class="info-event-text"> {{ item.responsible }} </span>
                    </div>
                  </div>
                </v-card-text>
              </div>

              <div class="d-none d-sm-flex flex-column justify-center align-center pa-3">
                <h2>{{ item.period }}</h2>
              </div>
            </div>
          </v-card>
        </main>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { dateFormatted, hourFormatted } from '@/utils/formatDates';
import { eventosSabado } from '@/store/events/sabado';
import { eventosDomingo } from '@/store/events/domingo';
import { eventosSegunda } from '@/store/events/segunda';
import { eventosTerca } from '@/store/events/terca';

export default {
  name: 'Event',

  data() {
    return {
      dataAtual: '2023-02-21 10:25:00',
      hours: hourFormatted(),
      today: dateFormatted(),
      eventsFormatted: eventosSabado.map(e => ({
        ...e,
        timestampStart: new Date(`2023-02-18 ${e.hourStart}`).getTime(),
        timestampEnd: new Date(`2023-02-18 ${e.hourEnd}`).getTime(),
      })),
    };
  },

  computed: {
    futureEvents() {
      const now = new Date(this.dataAtual);
      const currentDay = now.getDate();
      let eventsFormatted = [];
      const futuros = [];

      switch (currentDay) {
        case 18:
          eventsFormatted = eventosSabado.map(e => ({
            ...e,
            timestampStart: new Date(`2023-02-18 ${e.hourStart}`).getTime(),
            timestampEnd: new Date(`2023-02-18 ${e.hourEnd}`).getTime(),
          }));
          break;
        case 19:
          eventsFormatted = eventosDomingo.map(e => ({
            ...e,
            timestampStart: new Date(`2023-02-19 ${e.hourStart}`).getTime(),
            timestampEnd: new Date(`2023-02-19 ${e.hourEnd}`).getTime(),
          }));
          break;
        case 20:
          eventsFormatted = eventosSegunda.map(e => ({
            ...e,
            timestampStart: new Date(`2023-02-20 ${e.hourStart}`).getTime(),
            timestampEnd: new Date(`2023-02-20 ${e.hourEnd}`).getTime(),
          }));
          break;
        case 21:
          eventsFormatted = eventosTerca.map(e => ({
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
          return eventosSabado;
        case 19:
          return eventosDomingo;
        case 20:
          return eventosSegunda;
        case 21:
          return eventosTerca;
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
</style>

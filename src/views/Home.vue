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
          <h1 class="text-center">O que está rolando agora</h1>
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

                    <div class="d-flex align-end mt-2">
                      <v-icon class="mr-1">mdi-map-marker-outline</v-icon>
                      <span class="info-event-text"> {{ item.location }} </span>
                    </div>

                    <div class="d-flex align-end mt-2">
                      <v-icon class="mr-1">mdi-account-outline</v-icon>
                      <span class="info-event-text"> {{ item.responsible }} </span>
                    </div>
                  </div>
                </v-card-text>
              </div>

              <div class="d-flex flex-column justify-center align-center pa-3">
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

export default {
  name: 'Home',

  data() {
    return {
      hours: hourFormatted(),
      today: dateFormatted(),
      items: [
        {
          title: 'Abertura',
          hourStart: '09:40',
          hourEnd: '09:45',
          period: 'Manhã',
          location: 'Nave',
          responsible: 'Vídeo boas vindas',
        },
        {
          title: 'Louvor',
          hourStart: '09:45',
          hourEnd: '10:15',
          period: 'Manhã',
          location: 'Nave',
          responsible: 'Ministério louvor',
        },
      ],
    };
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
</style>

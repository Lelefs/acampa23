<template>
  <div class="home-acamp mx-auto" :class="windowWidth > 720 ? 'desk-view' : 'mobile-view'">
    <v-img
      width="100%"
      :min-height="windowWidth > 720 ? 600 : 330"
      :max-width="windowWidth > 720 ? 1440 : 720"
      :src="`img/banner-${windowWidth > 720 ? 'desk' : 'mobile'}.png`"
      alt="Banner"
      class="img-banner"
    ></v-img>

    <main class="d-flex flex-column">
      <div class="title-page d-flex flex-column">
        <span class="text-info text-1 mb-4">ACMP'23</span>

        <h1 class="text-info text-2 font-weight-bold mb-3">Faça sua inscrição!!</h1>

        <span class="text-info text-3" :class="windowWidth > 720 ? 'mb-10' : 'mb-5'"
          >Valores: R$750 (Carro) - R$800 (Ônibus) Parcelamento em até 4x</span
        >

        <v-btn
          rounded
          style="color: #fff"
          x-large
          color="#FF2E20"
          width="fit-content"
          class="font-weight-bold"
          :class="windowWidth > 720 ? '' : 'mx-auto'"
          href="https://forms.gle/fqiceMwqqFSo8seYA"
          target="_blank"
          >Fazer inscrição</v-btn
        >
      </div>

      <VideoComponent />

      <MidiasComponent />
    </main>

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" max-width="900" persistent>
      <v-card>
        <v-card-title>
          <v-btn class="ml-auto" icon color="#111827" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-img width="100%" src="img/amigos-proposito.jpeg" alt="Amigos do propósito" class="rounded"></v-img>

          <h1 class="title-modal-rifa">AMIGOS DO PROPÓSITO</h1>
        </v-card-text>

        <v-card-actions class="justify-center pb-5">
          <v-btn class="px-5 font-weight-bold" outlined rounded color="#6E0073" @click="dialog = false"> FECHAR </v-btn>

          <v-btn
            class="px-5 font-weight-bold"
            rounded
            color="#6E0073"
            href="https://rifa.digital/s/amigos-do-proposito-a23"
            target="_blank"
            @click="dialog = false"
            style="color: #fff"
          >
            PARTICIPAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MidiasComponent from '@/components/MidiasComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';

export default {
  name: 'Home',

  data() {
    return {
      dialog: true,
      windowWidth: window.innerWidth,
    };
  },

  components: { MidiasComponent, VideoComponent },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
.home-acamp {
  position: relative;
  max-width: 1440px;
  width: 100%;

  .img-banner {
    position: absolute;
    top: 0;
  }

  .title-page {
    z-index: 1;
    color: #fff;
    padding: 7.125rem;
    padding-bottom: 0;
  }

  .text-info {
    &.text-1 {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 105%;
      opacity: 0.75;
      letter-spacing: 0.15em;
    }

    &.text-2 {
      font-size: 3.75rem;
      line-height: 110%;
      letter-spacing: -0.03em;
    }

    &.text-3 {
      font-weight: 500;
      opacity: 0.9;
      max-width: 300px;
    }
  }
}

.title-modal-rifa {
  font-weight: 400;
  line-height: 105%;
  text-align: center;
  letter-spacing: 0.15em;
  color: #170d3f;
  margin: 24px 0 0;
}

@media only screen and (max-width: 720px) {
  .home-acamp {
    .title-page {
      padding: 1.5rem;
      padding-bottom: 0;
    }

    .text-info {
      &.text-1 {
        font-size: 12px;
        opacity: 0.75;
        text-align: center;
      }

      &.text-2 {
        font-size: 20px;
        text-align: center;
      }

      &.text-3 {
        font-size: 10px;
        max-width: 195px;
        margin: 0 auto;
        text-align: center;
      }
    }
  }

  .title-modal-rifa {
    font-size: 12px;
  }
}
</style>

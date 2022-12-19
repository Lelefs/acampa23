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
  </div>
</template>

<script>
import MidiasComponent from '@/components/MidiasComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';

export default {
  name: 'Home',

  data() {
    return {
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
}
</style>

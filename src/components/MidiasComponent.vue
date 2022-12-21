<template>
  <footer class="footer-midias-sociais">
    <v-row>
      <v-col cols="12">
        <h2 class="group-title">FALE COM A GENTE</h2>
        <span class="group-subtitle font-28 d-block">Entre em contato através das nossas redes sociais</span>
      </v-col>
      <v-col cols="12" md="4">
        <div class="d-flex flex-column div-infos-mididas divider-class">
          <v-img heigth="68px" src="img/mag_sbc.png" alt="MAG SBC" class="mb-3 d-none d-md-block"></v-img>

          <h3>MAG SBC</h3>

          <v-btn
            text
            class="btn-midias-mag mb-3"
            href="https://instagram.com/mag.sbc?igshid=NDc0ODY0MjQ="
            target="_blank"
          >
            <v-icon class="mr-2">mdi-instagram</v-icon>
            <p>mag.sbc</p>
          </v-btn>
          <v-btn text class="btn-midias-mag" href="https://api.whatsapp.com/send/?phone=5511911881680" target="_blank">
            <v-icon class="mr-2">mdi-whatsapp</v-icon>
            <p>11 91188-1680</p>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="d-flex flex-column div-infos-mididas divider-class">
          <v-img heigth="68px" src="img/mow.png" alt="MAG SBC" class="mb-3 d-none d-md-block"></v-img>

          <h3>MOW</h3>

          <v-btn
            text
            class="btn-midias-mag mb-3"
            href="https://instagram.com/magoneway?igshid=NDc0ODY0MjQ="
            target="_blank"
          >
            <v-icon class="mr-2">mdi-instagram</v-icon>
            <p>magoneway</p>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="d-flex flex-column div-infos-mididas">
          <v-img heigth="68px" src="img/comuna.png" alt="MAG SBC" class="mb-3 d-none d-md-block"></v-img>

          <h3>Comunidade da Graça</h3>

          <v-btn
            text
            class="btn-midias-mag mb-3"
            href="https://www.google.com/maps/place/Av.+Winston+Churchill,+1680+-+Rudge+Ramos,+SBC+-+SP"
            target="_blank"
          >
            <v-icon class="mr-2">mdi-map-marker-outline</v-icon>
            <p class="last-btn">
              Endereço: AV. Winston Churchill, 1680<br />
              Rudge Ramos - SBC - SP
            </p>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: 'MidiasComponent',
};
</script>

<style lang="scss">
.footer-midias-sociais {
  background: #f3f3f4;
  padding: 56px 7.125rem;
  margin-top: 60px;
}

.group-subtitle {
  margin-bottom: 60px;
}

.div-infos-mididas {
  width: fit-content;
  margin: 0 auto;
  align-items: center;

  h3 {
    position: relative;
    font-size: 20px;
    line-height: 125%;
    margin-bottom: 8px;

    @media only screen and (min-width: 720px) {
      margin-bottom: 40px;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 65px;
        height: 2px;
        background-color: #170d3f;
        opacity: 0.3;
      }
    }
  }
}

.btn-midias-mag {
  p {
    margin: 0;
    color: #423d51;
    font-size: 16px;
    text-transform: initial;
    letter-spacing: initial;
  }
}

@media only screen and (max-width: 720px) {
  .footer-midias-sociais {
    margin-top: 50px;
    padding: 25px 1.5rem;
  }

  .div-infos-mididas {
    position: relative;
    align-items: flex-start;
    margin: 0 0 40px;

    .btn-midias-mag {
      padding: 0 !important;
    }

    &.divider-class::after {
      content: '';
      position: absolute;
      bottom: -25px;
      left: 0;
      width: 99px;
      height: 2px;
      background-color: #170d3f;
      opacity: 0.3;
    }
  }

  .group-subtitle {
    font-size: 14px !important;
    margin: 6px 0 30px;
  }

  .last-btn {
    font-size: 14px !important;
  }
}
</style>

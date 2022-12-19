<template>
  <div class="div-video d-flex align-center flex-wrap">
    <iframe
      title="Acampamento 2023 - EU SOU"
      width="500"
      height="350"
      src="https://www.youtube.com/embed/-X2qHYfNjh4?autoplay=0"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <div>
      <h2 class="group-title">Acampa 23 - EU SOU</h2>
      <span class="group-subtitle">Acampamento MAG SBC 2023</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoComponent',
};
</script>

<style lang="scss">
.div-video {
  z-index: 1;
  margin-top: 280px;
  padding: 0 7.125rem;
  gap: 2rem;
}

@media only screen and (max-width: 720px) {
  .div-video {
    padding: 0 1.5rem;
    margin-top: 110px;
    text-align: center;
    justify-content: center;
    gap: 16px;

    iframe {
      order: 2;
    }
  }
}
</style>

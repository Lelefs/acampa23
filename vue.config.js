const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    port: process.env.PORT || 8080,
  },

  transpileDependencies: ['vuetify'],

  pwa: {
    name: 'MAG SBC - Acampa 2023',
    short_name: 'MAG SBC',
    theme_color: '#000',
    background_color: '#000',
    msTileColor: '#fff',
    manifestOptions: {
      name: 'MAG SBC - Acampa 2023',
      short_name: 'MAG SBC',
      theme_color: '#000',
      background_color: '#000',
      msTileColor: '#fff',
    },
  },
});

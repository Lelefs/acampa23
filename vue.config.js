const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
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

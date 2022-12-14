const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'MAG SBC - Acampa 2023',
    short_name: 'A23 - EU SOU',
    theme_color: '#000',
    background_color: '#000',
  },
});

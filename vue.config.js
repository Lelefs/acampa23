const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Acampa MAG SBC',
    shortName: 'Acampa',
  },
});

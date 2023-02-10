const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  devServer: {
    port: process.env.PORT || 8080,
  },
};

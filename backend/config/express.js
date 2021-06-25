const express = require('express');
const bodyParser = require('body-parser');
// const config = require('../config');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', '8080');

  // MIDDLEWARES
  app.use(bodyParser.json());

  return app;
};

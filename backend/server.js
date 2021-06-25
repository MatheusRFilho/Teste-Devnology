const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
  console.log(`[SERVER] Servidor rodando na porta ${port}`);
});

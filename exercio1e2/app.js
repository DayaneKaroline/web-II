const express = require('express');

const app = express();
app.use(express.json());

app.get('/mensagem', (req, res) => {
  res.send({ mensagem: "Bem vindo à API!" });
});

app.get('/curso', (req, res) => {
  res.json({ "nome": "Desenvolvimento Web,", "duracao": "120 horas" });  

  });
  
  const PORT = 3000;
  app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
const express = require('express');
const app = express();

const validarUsuario = require('./src/routes/validarUsuario');
app.use(express.json());

app.use('/validarUsuario', validarUsuarioRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;


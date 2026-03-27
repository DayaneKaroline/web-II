const express = require('express');
const app = express();

const validarUsuarioRouter = require('./routes/validarUsuario');
app.use('/validar-usuario', validarUsuarioRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;
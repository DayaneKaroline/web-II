const validarUsuario = (req, res, next) => {
    const { nome, email, idade } = req.body;
    const erros = [];

    //validação do nome
  if (!nome) {
    erros.push("O campo 'nome' é obrigatório.");
  }

  //validação do email
  if (!email||!email.includes('@')) {
    erros.push("O campo 'email' é obrigatório.");
  }

  //validação da idade
  if (!idade || idade <= 18) {
    erros.push("O campo 'idade' é obrigatório.");
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  // Se tudo estiver corerto
  return res.status(201).json({
    message: "Usuário criado com sucesso!",
    usuario: { nome,email,idade }
  })


};

module.exports = {
    validarUsuario
};


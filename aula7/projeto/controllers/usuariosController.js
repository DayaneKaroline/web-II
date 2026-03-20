exports.criarUsuario = (req, res) => {
    const { nome, email, idade } = req.body;

    //Validação do nome
  if(!nome || nome.length < 3){
    return res.status(400).json({
        success: false,
        error: "Nome é obrigatório"
    });
  }

    //Validação do email
    if(!email || !email.includes('@')){
        return res.status(400).json({
            success: false,
            error: "Email inválido"
        });
    }

    //Validação da idade
    if(!idade || idade < 0 || idade > 120){
        return res.status(400).json({
            success: false,
            error: "Idade inválida"
        });
    }

    //Se tudo estiver correto
    return res.status(201).json({
        success: true,
        message: "Usuário criado com sucesso",
        data: {nome, email, idade}
    });

}
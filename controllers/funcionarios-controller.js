// importanto o model do objeto Funcionarios
const funcionarios = require('../models/funcionarios-model')

exports.listar_funcionarios = (req, res)=>{
    funcionarios.find({}, (erro, funcionario)=>{
        if(erro) throw erro
        res.render('views/pages/listaFuncionarios', {resultado: funcionario})
    })
}


exports.cadastrar_funcionario_get = (req, res)=>{
    const resultado = []
    res.render('views/pages/cadastroFuncionario', {resultado})
}

exports.cadastrar_funcionario_post = (req, res)=>{
    // instanciando o model funcionarios
    const salvaFuncionario = new funcionarios() 

    salvaFuncionario.nome = req.body.nomeFunc
    salvaFuncionario.endereco = req.body.enderFunc
    salvaFuncionario.email = req.body.emailFunc
    salvaFuncionario.salario = req.body.salarioFunc

    salvaFuncionario.save((erro)=>{
        if(erro) throw erro
        return res.redirect('/funcionarios')
    })
}

exports.deletar = (req, res)=>{
    const idFuncionario = req.params.id
    funcionarios.deleteOne({_id:idFuncionario}, (erro, resultado)=>{
        if(erro) throw erro
        return res.redirect('/funcionarios')
    })
}
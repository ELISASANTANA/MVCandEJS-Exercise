const mongoose = require('mongoose')

                                // nome da collection
const Funcionarios = mongoose.model('funcionarios', {
    nome: String,
    endereco: String,
    email: String,
    salario: String
})

module.exports = Funcionarios
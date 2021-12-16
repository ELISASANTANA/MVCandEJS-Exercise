const express = require('express')
const router = express.Router()

const funcionariosController = require('../controllers/funcionarios-controller')

// router.get('/', (req, res)=>{
//     res.send('estamos na rota funcionarios')
// })

// a const que pediu require e o nome da função 
router.get('/', funcionariosController.listar_funcionarios)

router.get('/cadastro', funcionariosController.cadastrar_funcionario_get)

router.post('/cadastro', funcionariosController.cadastrar_funcionario_post)

router.get('/deletar/:id', funcionariosController.deletar)
    
module.exports = router
const express = require('express')
const mongoose = require('mongoose')
const porta = 8000

// chamando o aqrquivo do modulo 
const funcionarios_router = require('./routers/funcionarios-routers')

const app = express()

mongoose.connect('mongodb+srv://elisaSantana:Pipoca24.@cluster0.g588m.mongodb.net/cafeteriaMVC?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Conectados ao BD')
})

app.set('view engine', 'ejs')
app.set('views', __dirname, '/views')
// transição de string e json entre o leitor e o usuário
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

// usar as rotas que vem do arquivo funcionarios_router
app.use('/funcionarios', funcionarios_router)

app.get('/', (req, res)=>{
    res.send('Página Inicial')
})

app.listen(porta, ()=>{
    console.log('conectada a porta ' + porta)
})
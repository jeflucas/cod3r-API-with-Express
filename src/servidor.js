const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    req.send(produto)
})

app.get('/produtos', (req, res, next) =>{
    res.send({ nome: 'Notebook', preco: 123.45}) //vai converter para JSON
})

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}`)
})
const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"
const mongoose = require("mongoose")
require('./models/Pedido')
const Pedido = mongoose.model('pedidos')

  routes.get("/", (req, res) => res.render(views + "home", {}))

  routes.get("/contato", (req, res) => res.render(views + "contato", {}))
  routes.post("/contato", (req, res) =>{ 

  novoPedido = {

    nomeCompleto: req.body.nomeCompleto,
    email: req.body.email,

  }
  new Pedido(novoPedido).save().then(() => {

    console.log("Pedido cadastrado com sucesso!")
    res.render(views + "/contato")

  })
  .catch((erro) =>{

    console.log("Erro ao cadastrar pedido:" + erro)
    res.render("/contato")

  })
  
  

})
  routes.get("/sobre", (req, res) => res.render(views + "sobre", {}))

module.exports = routes;

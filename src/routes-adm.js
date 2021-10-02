const express = require("express")
const admin = express.Router()
const views = __dirname + "/views/"
const mongoose = require("mongoose")
require('./models/Pedido')
const Pedido = mongoose.model('pedidos')
require('./routes')

var erros = []

const adm = "rogerio"
const password = '123321'

admin.get("/", (req, res) => res.render(views + "admin/login", {}))
admin.post("/home", (req, res) => {

    if(req.body.user == adm && req.body.password == password){
        Pedido.find().then(function (pedidos){
            res.render(views + "admin/home", {pedidos: pedidos})
        }).catch((err) => {
            console.log('houve um erro' + err)
        })
    }else{

        res.redirect('/admin/')

    }
})

admin.get('/editar/:id', (req, res) => {

        Pedido.findOne({_id:req.params.id}).then((pedido)=>{
            res.render(views + "admin/editar", {pedido: pedido})
        }).catch((err) => {
            console.log('Pedido não existe')
            res.send('Pedido não existe')
        })
    
})

admin.post('/editar/', (req,res) => {

    if(erros.length >= 1){
    
        for(var i = 0; i = erros.length; i++){
          erros.shift()
        }}
    
    Pedido.findOne({cpf:req.body.cpf}).then((pedido) => {

        

        if(!req.body.nomeCompleto || typeof req.body.nomeCompleto == undefined || req.body.nomeCompleto == null) {
            erros.push({texto: "Nome inválido"})
          }
          else if(req.body.nomeCompleto.length < 4) {erros.push({texto: "Nome muito curto, mínimo de 4 dígitos"})}
          else if(req.body.nomeCompleto.length > 30) {erros.push({texto: "Nome muito longo, máximo de 30 dígitos"})}

          if(!req.body.cep || typeof req.body.cep == undefined || req.body.cep == null) {erros.push({texto: "CEP inválidooo"})}
    else if(req.body.cep.length < 8) {erros.push({texto: "CEP inválido"})}

    if(!req.body.estado || typeof req.body.estado == undefined || req.body.estado == null) {erros.push({texto: "Estado inválido"})}

    if(!req.body.cidade || typeof req.body.cidade == undefined || req.body.cidade == null) {erros.push({texto: "Cidade inválida"})}

    if(!req.body.bairro || typeof req.body.bairro == undefined || req.body.bairro == null) {erros.push({texto: "Bairro inválido"})}

    if(!req.body.rua || typeof req.body.rua == undefined || req.body.rua == null) {erros.push({texto: "Rua inválida"})}

    if(!req.body.numero || typeof req.body.numero == undefined || req.body.numero == null || req.body.numero <= 0) {erros.push({texto: "Numero inválido"})}
    if(erros.length > 0 ){

        sucesso = 1
          //res.render(views + "admin/editar", {sucesso, erros: erros, nomeC, email, cpfF, dataN, cep, estado, cidade, bairro, rua, numero})
          res.send(erros)
          console.log(erros)
          
  
      }else(
        sucesso = 2,

        pedido.nomeCompleto = req.body.nomeCompleto,
        pedido.cep = req.body.cep,
        pedido.estado = req.body.estado,
        pedido.cidade = req.body.cidade,
        pedido.bairro = req.body.bairro,
        pedido.rua = req.body.rua,
        pedido.numero = req.body.numero,
        pedido.check = req.body.check,


        pedido.save().then(() =>{

            /*if(pedido.nomeCompleto === req.body.nomeCompleto |
                pedido.cep === req.body.cep |
                pedido.estado === req.body.estado |
                pedido.cidade === req.body.cidade |
                pedido.bairro === req.body.bairro |
                pedido.rua === req.body.rua |
                pedido.numero === req.body.numero |
                pedido.check === req.body.check){}*/

                
                
            res.send('Pedido Editado com sucesso!')
        }).catch((err) =>{
            sucesso = 1
            res.send('Erro interno ao editar pedido' + err)
        }))
        
    }).catch((err) => {
        res.send('Erro ao editar pedido' + err)
    })

})



module.exports = admin;

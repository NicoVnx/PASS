const express = require("express")
const admin = express.Router()
const views = __dirname + "/views/"
const mongoose = require("mongoose")
require('./models/Pedido')
const Pedido = mongoose.model('pedidos')
require('./routes')

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

module.exports = admin;

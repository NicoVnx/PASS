const express = require("express")
const admin = express.Router()
const views = __dirname + "/views/"

const adm = "rogerio"
const password = '123321'

admin.get("/", (req, res) => res.render(views + "admin/login", {}))
admin.post("/home", (req, res) => {

    if(req.body.user == adm && req.body.password == password){ 
        res.render(views + "admin/home", {})
    }else{

        res.redirect('/admin/')

    }
})

module.exports = admin;

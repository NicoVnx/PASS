const express = require("express")
const server = express()
const admin = require("./src/routes-adm")
const routes = require("./src/routes")

const mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/passViagem", {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
console.log("MongoDB Conectado...")
}).catch((erro) => {
console.log("Houve um erro ao se conectar: " + erro)
})


server.use(express.static("public"))


server.use(express.urlencoded({ extended: true }))


server.set("view engine", "ejs")


server.use(routes)
server.use('/admin', admin)
server.listen(3000, () => console.log("Server Rodando!"))

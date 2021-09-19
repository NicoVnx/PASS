const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"

  routes.get("/", (req, res) => res.render(views + "home", {}))

  routes.get("/contato", (req, res) => res.render(views + "contato", {}))
  routes.post("/contato", (req, res) =>{ 

  res.render(views + "contato");
  console.log('Pedido realizado com sucesso');
  console.log(req.body.nomeCompleto);
  console.log(req.body.check)

})
  routes.get("/sobre", (req, res) => res.render(views + "sobre", {}))

module.exports = routes;

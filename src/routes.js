const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"

const mongoose = require("mongoose")

require('./models/Pedido')
const Pedido = mongoose.model('pedidos')

require('./models/Suporte')
const Suporte = mongoose.model('suportes')

sendMail = require('../public/script/sendMail')
sendMailSup = require('../public/script/sendMailSup')


var erros = []
var sucesso
    

  routes.get("/", (req, res) => res.render(views + "home", {}))

  routes.get("/contato", (req, res) => {
    sucesso = 1

    if(erros.length >= 1){
    
      for(var i = 0; i = erros.length; i++){
        erros.shift()
      }
    }

    var nomeC = req.body.nomeCompleto
    var email = req.body.email
    var cpfF = req.body.cpf
    var dataN = req.body.dataNasc
    var cep = req.body.cep
    var estado = req.body.estado
    var cidade = req.body.cidade
    var bairro = req.body.bairro
    var rua = req.body.rua
    var numero = req.body.numero
    var check = req.body.check

  res.render(views + "contato", {sucesso, erros: erros, nomeC, email, cpfF, dataN, cep, estado, cidade, bairro, rua, numero})
})
  routes.post("/contato", (req, res) =>{ 

    var nomeC = req.body.nomeCompleto
    var email = req.body.email
    var cpfF = req.body.cpf
    var dataN = req.body.dataNasc
    var cep = req.body.cep
    var estado = req.body.estado
    var cidade = req.body.cidade
    var bairro = req.body.bairro
    var rua = req.body.rua
    var numero = req.body.numero
    var check = req.body.check

    if(erros.length >= 1){
    
    for(var i = 0; i = erros.length; i++){
      erros.shift()
    }
  }

    var validateEmail = function(email) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email)
  };

    if(!req.body.nomeCompleto || typeof req.body.nomeCompleto == undefined || req.body.nomeCompleto == null) {
      erros.push({texto: "Nome inválido"})
    }
    else if(req.body.nomeCompleto.length < 4) {erros.push({texto: "Nome muito curto, mínimo de 4 dígitos"})}
    else if(req.body.nomeCompleto.length > 30) {erros.push({texto: "Nome muito longo, máximo de 30 dígitos"})}



    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) {erros.push({texto: "Email inválido"})}
    else if(req.body.email == validateEmail ) {erros.push({texto: "Email inválido str"})}



    function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }
    var strCPF = req.body.cpf;


    if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null) {erros.push({texto: "CPF inválido"})}
    else if(req.body.cpf.length < 11) {erros.push({texto: "CPF inválido"})}
    else if(TestaCPF(strCPF) == false){erros.push({texto: "Insira um CPF válido existente"})}

    


      function calculaIdade(dataNasc){ 
      var dataAtual = new Date();
      var anoAtual = dataAtual.getFullYear();
      var anoNascParts = dataNasc.split('/');
      var diaNasc =anoNascParts[0];
      var mesNasc =anoNascParts[1];
      var anoNasc =anoNascParts[2];
      var idade = anoAtual - anoNasc;
      var mesAtual = dataAtual.getMonth() + 1; 
      //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
      if(mesAtual < mesNasc){
      idade--; 
      } else {
      //Se estiver no mes do nascimento, verificar o dia
      if(mesAtual == mesNasc){ 
      if(new Date().getDate() < diaNasc ){ 
      //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
      idade--; 
      }
      }
      } 
      return idade; 
     }
     
    if(!req.body.dataNasc || typeof req.body.dataNasc == undefined || req.body.dataNasc == null) {erros.push({texto: "Data de Nascimento inválida"})}
    else if(calculaIdade(req.body.dataNasc) < 18){
      erros.push({texto: "Você precisa ser maior de idade para continuar!"})

     }
   



    if(!req.body.cep || typeof req.body.cep == undefined || req.body.cep == null) {erros.push({texto: "CEP inválido"})}
    else if(req.body.cep.length < 8) {erros.push({texto: "CEP inválido"})}

    if(!req.body.estado || typeof req.body.estado == undefined || req.body.estado == null) {erros.push({texto: "Estado inválido"})}

    if(!req.body.cidade || typeof req.body.cidade == undefined || req.body.cidade == null) {erros.push({texto: "Cidade inválida"})}

    if(!req.body.bairro || typeof req.body.bairro == undefined || req.body.bairro == null) {erros.push({texto: "Bairro inválido"})}

    if(!req.body.rua || typeof req.body.rua == undefined || req.body.rua == null) {erros.push({texto: "Rua inválida"})}

    if(!req.body.numero || typeof req.body.numero == undefined || req.body.numero == null || req.body.numero <= 0) {erros.push({texto: "Numero inválido"})}

     if(!req.body.check || typeof req.body.check == undefined || req.body.check == null || req.body.check.length <= 0){erros.push({texto: "Selecione ao menos um plano!"})}


    if(erros.length > 0 ){

      sucesso = 1
        res.render(views + "contato", {sucesso, erros: erros, nomeC, email, cpfF, dataN, cep, estado, cidade, bairro, rua, numero})
        console.log(erros)
        

    }else{

      sucesso = 2
      

      novoPedido = {

        nomeCompleto: nomeC,
        email: email,
        cpf: cpfF,
        dataNasc: dataN,
        cep: cep,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero,
        check: check

      }

      new Pedido(novoPedido).save().then(() => {

        console.log("Pedido cadastrado com sucesso!")
        res.render(views + "contato", {sucesso, erros: erros, nomeC, email, cpfF, dataN, cep, estado, cidade, bairro, rua, numero})
        
        Pedido.findOne({cpf:req.body.cpf}).then((pedido)=>{
          const id = pedido._id
          sendMail(email, id, nomeC)
      }).catch((err) => {
      console.log(err)
      })

        

      }).catch((erro) =>{
        sucesso = 1
       console.log("Erro ao cadastrar pedido:" + erro)
      
        erros.push({texto: erro})
        
        
        res.render(views + "contato", {sucesso, erros: erros, nomeC, email, cpfF, dataN, cep, estado, cidade, bairro, rua, numero})

      })
  
    }

  })


  routes.get("/sobre", (req, res) => res.render(views + "sobre", {}))

  routes.get("/suporte", (req, res) => {
    var emailS = req.body.email
    var sup = req.body.sup
    sucesso = 0
    res.render(views + "suporte", {erros: erros, emailS, sup, sucesso})
    
  })

  routes.post("/suporte", (req, res) => {
    sucesso = 0
    if(erros.length >= 1){
    
      for(var i = 0; i = erros.length; i++){
        erros.shift()
      }
    }

    var emailS = req.body.email
    var sup = req.body.sup

    var validateEmailS = function(emailS) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(emailS)}

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) {erros.push({texto: "Email inválido"})}
    if(req.body.email == validateEmailS ) {erros.push({texto: "Insira um email valido!"})}

    if(!req.body.sup || typeof req.body.sup == undefined || req.body.sup == null) {erros.push({texto: "Área de suporte vazia!"})}

    if(erros.length > 0 ){
      sucesso = 1
        res.render(views + "suporte", {erros: erros, emailS, sup, sucesso})
        console.log(erros)
        

    }else{
      sucesso = 2
      novoSuporte = {

        suporteTxt: sup,
        email: emailS

      }

      new Suporte(novoSuporte).save().then(() => {

        console.log("Suporte cadastrado com sucesso!")
        res.render(views + "suporte", {erros: erros, emailS, sup, sucesso})
        sendMailSup(emailS, sup)

      })

    }
  
  })


module.exports = routes;

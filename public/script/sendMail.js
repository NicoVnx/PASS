sendMail = function(email){

const nodemailer = require('nodemailer')

var remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'nicolas.viana7spam@gmail.com',
        pass: '38483315n'
    }
})

    var emailASerEnviado = {
      from: 'nicolas.viana7spam@gmail.com',
      to: email,
      subject: 'Enviando Email com Node.js',
      text: 'Estou te enviando este email com node.js',
      }

      remetente.sendMail(emailASerEnviado, function(error){
        if (error) {
        console.log(error)
        } else {
        console.log('Email enviado com sucesso.')
        console.log(email)
        }
        });
    
    }
    module.exports = sendMail
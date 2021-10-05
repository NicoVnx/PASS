sendMailSup = function(emailS, sup){

    const nodemailer = require('nodemailer')
    const email = emailS


    var remetenteSup = nodemailer.createTransport({

        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
        user: 'nicolas.viana7spam@gmail.com',
        pass: '38483315n'
        }

    })

    var emailASerEnviadoSup = {

        from: 'nicolas.viana7spam@gmail.com',
        to: email,
        subject: 'Suporte enviado!',
        html: 'Seu pedido de suporte foi enviado com sucesso, -> ' + sup 

    }

    remetenteSup.sendMail(emailASerEnviadoSup, function(error){

        if (error) {
        console.log(error)
        } else {
        console.log('Suporte enviado com sucesso para -> ' + email)
        }

    });

}
module.exports = sendMailSup

    
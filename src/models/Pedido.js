const mongoose = require("mongoose")

/*mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/passViagem", {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
console.log("MongoDB Conectado...")
}).catch((erro) => {
console.log("Houve um erro ao se conectar: " + erro)
})*/


const PedidoSchema = mongoose.Schema({

    nomeCompleto:{
        type: String,
        unique: false,
        lowercase: true,
    },
    email:{
        type: String,
        require: true,
        lowercase: true,
        
    },
    cpf:{
        type: String,
        require: true,
    },
    dataNasc:{
        type: String,
        require: true,
    },

    cep:{
        type: String,
        require: true,
    },
    estado:{
        type: String,
        require: true,
        lowercase: true,
    },
    cidade:{
        type: String,
        lowercase: true,
        require: true,
    },
    bairro:{
        type: String,
        lowercase: true,
        require: true,
    },
    rua:{
        type: String,
        lowercase: true,
        require: true,
    },
    numero:{
        type: String,
        require: true,
    },
    check:{
        type: String,
        lowercase: true,
        require: true,
    },
})

mongoose.model('pedidos', PedidoSchema)

/*const newPedido = mongoose.model('pedidos', PedidoSchema)

const pedidoOne = newPedido

new pedidoOne({

    nomeCompleto: "ola mundo",
    email: "eu@eu.com",
    cpf: "48895546881",
    dataNasc: "01/01/2002",
    cep: "13290000",
    estado: '1',
    cidade: "1",
    bairro: "1",
    rua: "1",
    numero: "1",
    check: "a"

}).save()
.then(() => {
    console.log("Pedido cadastrado")
}).catch((erro) => {
    console.log("Houve um erro " + erro)
})*/


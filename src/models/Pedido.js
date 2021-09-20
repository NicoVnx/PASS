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
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    cpf:{
        type: Number,
        require: true,
    },
    dataNasc:{
        type: Date,
        require: true,
    },

    cep:{
        type: Number,
        require: true,
    },
    estado:{
        type: String,
        require: true,
    },
    cidade:{
        type: String,
        require: true,
    },
    bairro:{
        type: String,
        require: true,
    },
    rua:{
        type: String,
        require: true,
    },
    numero:{
        type: Number,
        require: true,
    },
})

mongoose.model('pedidos', PedidoSchema)

/*const newPedido = mongoose.model('pedidos', PedidoSchema)

const pedidoOne = newPedido

new pedidoOne({

    nomeCompleto: "ola mundo",
    email: "eu@eu.com"

}).save()
.then(() => {
    console.log("Pedido cadastrado")
}).catch((erro) => {
    console.log("Houve um erro " + erro)
})*/


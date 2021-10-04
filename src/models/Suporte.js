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


const SuporteSchema = mongoose.Schema({

    suporteTxt:{

        type: String,
        require: true,
        lowercase: true,
        unique: false,
        
    },
    email:{
        type: String,
        require: true,
        unique: false,
        lowercase: true,
    },
    createdAt:{ 
        type: Date,  
        default: Date.now 
    },
})

mongoose.model('suportes', SuporteSchema)

/*const newSuporte = mongoose.model('suportes', SuporteSchema)

const suporteOne = newSuporte

new suporteOne({

    suporteTxt: "erro cadastro",
    email: "nico@gmail.com"
}).save()
.then(() => {
    console.log("Suporte cadastrado")
}).catch((erro) => {
    console.log("Houve um erro " + erro)
})*/

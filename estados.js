

var estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]

var i

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escolha um estado", function(estado) {
    
        console.log(`Você escolheu - ${estado}`);
        rl.close();
    ;
});

rl.on("close", function() {
    
const select = valueOf.estados[i]
if(select == select){

    function changePosition(estados, from, to) {
        estados.splice(to, 0, estados.splice(from, 1)[0]);
        return estados;
    };
    
    estados = changePosition(estados, i, 0);
    console.log(estados)

}

    process.exit(0);
});


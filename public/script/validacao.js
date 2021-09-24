function validar (){

    const nome = document.getElementsByName("nomeCompleto")
    const email = document.getElementByName("email")
    const cpf = document.getElementByName("cpf")
    const dataNasc = document.getElementByName("dataNasc")

    const cep = document.getElementByName("cep")
    const estado = document.getElementByName("estado")
    const cidade = document.getElementByName("cidade")
    const bairro = document.getElementByName("bairro")
    const rua = document.getElementByName("rua")
    const numero = document.getElementByName("numero")

    const radio = document.querySelectorAll("input[type=radio]:checked")

    const data = Date.now()

    
    if(nome.value == ""){
  
        alert('Preencha o campo Nome')
        nome.focus()
        return false
    
      }
      
      if(email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
  
        alert('Preencha o campo Email')
        email.focus()
        return false
    
      }

      if(cpf.value == ""){
  
        alert('Preencha o campo CPF')
        cpf.focus()
        return false
    
      }
      
      if(dataNasc.value == ""){
  
        alert('Preencha o campo Data')
        dataNasc.focus()
        return false
    
      }

      let nasc18 = dataNasc.value.split("-").map(Number);
      let depois18Anos = new Date(nasc18[0] + 18, nasc18[1] - 1, nasc18[2]);
      let agora = new Date();
  
      if (depois18Anos > agora){
        alert('Você precisa ser maior de idade para fazer um pedido')
        console.log('menor de idade')
        dataNasc.focus()
        return false
      }

      if(cep.value == "" ){
  
        alert('Preencha o campo CEP')
        cep.focus()
        return false
    
      }

      if(cep.value !== /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/ ){

        alert('CEP inválido')
        cep.focus()
        return false

      }

      if(estado.value == ""){
  
        alert('Preencha o campo estado')
        estado.focus()
        return false
    
      }

      if(cidade.value == ""){
  
        alert('Preencha o campo CNameade')
        cNameade.focus()
        return false
    
      }

      if(bairro.value == ""){
  
        alert('Preencha o campo Bairro')
        bairro.focus()
        return false
    
      }

      if(rua.value == ""){
  
        alert('Preencha o campo Rua')
        rua.focus()
        return false
    
      }

      if(numero.value == ""){
  
        alert('Preencha o campo Número')
        numero.focus()
        return false
    
      }

      if(radio.length < 1){

        alert('Escolha um Plano de Viagem')
        radio[0].focus()
        return false

      }

    
}

      
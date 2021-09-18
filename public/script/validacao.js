function validar (){

    const nome = document.getElementById("nome-completo")
    const email = document.getElementById("email")
    const cpf = document.getElementById("cpf")
    const dataNasc = document.getElementById("data-nasc")

    const cep = document.getElementById("cep")
    const estado = document.getElementById("estado")
    const cidade = document.getElementById("cidade")
    const bairro = document.getElementById("bairro")
    const rua = document.getElementById("rua")
    const numero = document.getElementById("numero")

    const radio = document.querySelectorAll("input[type=radio]:checked")
    
    
    if(nome.value == ""){
  
        alert('Preencha o campo Nome')
        nome.focus()
        return false
    
      }
      
      if(email.value == "" || email.value.indexOf('@') == -1 ){
  
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

      if(cep.value == ""){
  
        alert('Preencha o campo CEP')
        cep.focus()
        return false
    
      }

      if(estado.value == ""){
  
        alert('Preencha o campo estado')
        estado.focus()
        return false
    
      }

      if(cidade.value == ""){
  
        alert('Preencha o campo Cidade')
        cidade.focus()
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

      
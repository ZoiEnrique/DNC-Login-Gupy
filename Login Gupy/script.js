function validation() {
  var phoneValue = document.getElementById("telefone").value;
  var emailValue = document.getElementById("email").value;
  var usernameValue = document.getElementById("username").value;
  var cpfValue = document.getElementById("cpf").value
  var senhaValue = document.getElementById("senha").value;
  var text;
  
  if (usernameValue  === '') {
    text = "*Campo Obrigatório";
  }else{
    text = ''
  }
  document.getElementById("erro1").innerHTML = text;
  //
  if (emailValue == ''){
    text2 = "*Campo Obrigatório"

  }else{
    text2 = ''
  }
  document.getElementById("erro2").innerHTML = text2;
  //
  if (phoneValue === '') {
    text3 = "*Campo Obrigatório";
  }else{
    text3 = ''
  }
  document.getElementById("erro3").innerHTML = text3;
  //
  if (cpfValue === '') {
    text4 = "*Campo Obrigatório";
  }else{
    text4 = ''
  }
  document.getElementById("erro4").innerHTML = text4;
  //
  if (senhaValue === '') {
    text5 = "*Campo Obrigatório";
  }else{
    text5 = ''
  }
  document.getElementById("erro5").innerHTML = text5;
   //
   if(usernameValue && emailValue && phoneValue && cpfValue && senhaValue !== ''){
    textSucess = 'Sucesso!'
   }else{
    textErro = "campo"
   }document.getElementById('sucess').innerHTML = textSucess;
 }



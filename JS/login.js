function botaoVerde(cor) {
  document.getElementById('entrar-btn').style.backgroundColor = `${cor}`
}

botaoVerde("#28e621")



function enviar() {

  let login =
    {
      email: '',
      senha: '',
    }

    login.email = document.getElementById('email').value
    login.senha = document.getElementById('senha').value

  console.log(login);
}

enviar()
var hora = new Date().getHours()
var minutos = new Date().getMinutes()
var mensagem = document.getElementById ("msg")
var imagem = document.getElementById ("foto")
var titulo = document.getElementById ("title")


mensagem.innerHTML = (`<p>Agora são ${hora} horas e ${minutos} minutos</p>`)

if (hora > 5 && hora <= 12) {
   titulo.innerHTML += ("&#9788;Hora do Dia&#9788;")
   mensagem.innerHTML += ("<p>Bom dia!</p>")
   imagem.src = "manha.jpg"
   corpo.style.backgroundColor = "#FFEC5C"
}
else if (hora > 12 && hora <= 18) {
  titulo.innerHTML += ("Hora do Dia")
  mensagem.innerHTML += ("<p>Boa tarde!</p>")
  imagem.src = "tarde.jpg"
  corpo.style.backgroundColor = "#9C3E00"
}
else {
    titulo.innerHTML += ("&#10025;Hora do Dia&#10025;")
    mensagem.innerHTML += ("<p>Boa noite!</p>")
    imagem.src = "noite.jpg"
    corpo.style.backgroundColor = "#012030"
}
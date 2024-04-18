let hora = new Date().getHours()
let minutos = new Date().getMinutes()
let mensagem = document.getElementById ("msg")
let imagem = document.getElementById ("foto")
let main = document.getElementById("conteudo")
let titulo = document.getElementById ("title")
let corpo = document.getElementById("corpo")

let key = "tjsS7xQHjFZghfxXsgz8pKyTiNjG8tfm43HcauJCKMixPjdl5KWX9pji";
let options = {
  method: 'GET',
  headers: {
    'Authorization': key,
    'Content-Type': 'application/json'
  }
}

async function FetchApi(query) {
  let url = `https://api.pexels.com/v1/search?query=${query}`;
  const ApiResponse = await fetch(url, options);
  const data = await ApiResponse.json();
  return data;
  }

  console.log(FetchApi('soccer'));

  async function FetchImage(query) {
    let random = Math.floor(Math.random() * 15);
    const data = await FetchApi(query);
    corpo.style.background = `url(${data['photos'][random]['src']['original']})`;
    corpo.style.backgroundRepeat = 'no-repeat';
    corpo.style.backgroundSize = 'cover';
    corpo.style.backgroundPosition = 'center center'
  }

  mensagem.innerHTML = (`<p>Agora são ${hora} horas e ${minutos} minutos</p>`)

  if (hora > 5 && hora <= 12) {
     titulo.innerHTML += ("&#9788;Hora do Dia&#9788;")
     mensagem.innerHTML += ("<p>Bom dia!</p>")
     FetchImage('day');
  }
  else if (hora > 12 && hora <= 18) {
    titulo.innerHTML += ("Hora do Dia");
    mensagem.innerHTML += ("<p>Boa tarde!</p>");
    FetchImage('afternoon');
    
  }
  else {
    titulo.innerHTML += ("&#10025;Hora do Dia&#10025;")
    mensagem.innerHTML += ("<p>Boa noite!</p>");
    FetchImage('night');
    main.style.backgroundColor = 'rgba(245, 245, 220, 0.671)'
  }


var hora = new Date().getHours()
var minutos = new Date().getMinutes()
var mensagem = document.getElementById ("msg")
var imagem = document.getElementById ("foto")
var titulo = document.getElementById ("title")
let som = document.getElementById("som");


let key = "tjsS7xQHjFZghfxXsgz8pKyTiNjG8tfm43HcauJCKMixPjdl5KWX9pji";
let options = {
  method: 'GET',
  headers: {
    'Authorization': key,
    'Content-Type': 'application/json'
  }
}


async function FetchApi(query) {
  let random = Math.floor(Math.random() * 15);
  let url = `https://api.pexels.com/v1/search?query=${query}&limit=50`;
  const ApiResponse = await fetch(url, options);
  const data = await ApiResponse.json();
  return data['photos'][random]['src']['portrait'];
  }


  console.log(FetchApi('night'));
  
mensagem.innerHTML = (`<p>Agora são ${hora} horas e ${minutos} minutos</p>`)

if (hora > 5 && hora <= 12) {
   let source = FetchApi('morning');
   titulo.innerHTML += ("&#9788;Hora do Dia&#9788;")
   mensagem.innerHTML += ("<p>Bom dia!</p>")
   imagem.src = source;
   corpo.style.backgroundColor = "#FFEC5C"
}
else if (hora > 12 && hora <= 18) {
  let source = FetchApi('afternoon');
  titulo.innerHTML += ("Hora do Dia");
  mensagem.innerHTML += ("<p>Boa tarde!</p>");
  imagem.src = source;
  corpo.style.backgroundColor = "#9C3E00";
}
else {
  let source = FetchApi('night');
  titulo.innerHTML += ("&#10025;Hora do Dia&#10025;")
  mensagem.innerHTML += ("<p>Boa noite!</p>");
  imagem.src = source;
  corpo.style.backgroundColor = "#012030";
  
}



  
  
    
/*
const apiKey = 'tjsS7xQHjFZghfxXsgz8pKyTiNjG8tfm43HcauJCKMixPjdl5KWX9pji';
const query = 'night';

fetch(`https://api.pexels.com/v1/search?query=${query}`, {
  headers: {
    Authorization: apiKey
  }
})
.then(response => response.json())
.then(data => {
  console.log(data['photos']); // Verifique o conteúdo da resposta
})
.catch(error => console.error('Erro ao fazer solicitação:', error));
  */ 
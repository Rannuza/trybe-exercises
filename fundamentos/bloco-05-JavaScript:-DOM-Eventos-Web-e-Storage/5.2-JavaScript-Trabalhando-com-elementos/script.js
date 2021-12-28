// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .

const inicio = document.querySelector("#elementoOndeVoceEsta");

inicio.parentElement.style.color = "red";

document.querySelector("#primeiroFilhoDoFilho").textContent = "Texto"

const pai = document.querySelector("#pai");

console.log(pai.firstElementChild);

console.log(inicio.previousElementSibling);

console.log(inicio.nextSibling);

console.log(inicio.nextSibling.nextSibling);

console.log(pai.lastElementChild.previousElementSibling);

inicio.parentElement.appendChild(document.createElement("section")).setAttribute("class", "irmaoCriado");

inicio.appendChild(document.createElement("section")).setAttribute("class", "filhoCriado");

inicio.firstElementChild.appendChild(document.createElement("section")).setAttribute("id", "filhoDoFilhoCriado");

console.log(document.querySelector("#filhoDoFilhoCriado").parentElement.parentElement.nextElementSibling)
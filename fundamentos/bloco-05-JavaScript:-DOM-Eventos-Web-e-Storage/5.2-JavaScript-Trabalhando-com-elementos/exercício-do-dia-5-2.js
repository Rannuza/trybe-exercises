// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const body = document.querySelector("body");
body.appendChild(document.createElement("h1")).textContent = "Exercício 5.2 - JavaScript DOM";

// Adicione a tag main com a classe main-content como filho da tag body;

body.appendChild(document.createElement("main")).setAttribute("class", "main-content");

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

document.querySelector("main").appendChild(document.createElement("section")).setAttribute("class", "center-content");

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

document.querySelector("section").appendChild(document.createElement("p")).textContent = "Algum texto";

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

document.querySelector("main").appendChild(document.createElement("section")).setAttribute("class", "left-content");

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

document.querySelector("main").appendChild(document.createElement("section")).setAttribute("class", "right-content");

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

document.querySelector(".left-content").appendChild(document.createElement("img")).setAttribute("src", "https://picsum.photos/200");

document.querySelector("img").setAttribute("class", "small-image")

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

document.querySelector(".right-content").appendChild(document.createElement("ul"))

const array = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]
const lista = document.querySelector("ul")

for (let i of array) {
  lista.appendChild(document.createElement("li")).textContent = i;
}
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let i = 0; i < 3; i +=1) {
  document.querySelector("main").appendChild(document.createElement("h3"))
}

// Adicione a classe title na tag h1 criada;

document.querySelector("h1").setAttribute("class", "title");

// Adicione a classe description nas 3 tags h3 criadas;
const tagH3 = document.getElementsByTagName("h3");

// for (let i = 0; i <= tagH3.length; i +=1) {
//   tagH3[i].className = "description";
// };

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// Essa parte só funciona quando comento o exercício anterior, não sei porque.

const sectionLeft = document.getElementsByClassName("left-content")[0];
document.getElementsByTagName("main")[0].removeChild(sectionLeft);


// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

const sectionRight = document.getElementsByClassName("right-content")[0];
sectionRight.style.marginRight = "auto";

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
document.querySelector(".center-content").parentElement.style.backgroundColor = "#E95AA3";

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

lista.lastChild.remove();
lista.lastChild.remove();
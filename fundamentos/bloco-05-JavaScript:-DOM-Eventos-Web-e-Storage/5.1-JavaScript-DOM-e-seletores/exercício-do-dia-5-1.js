/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

const paragrafo = document.getElementsByTagName("p")[0];

paragrafo.textContent = "rica! kkkkkkkk";

const texto = document.getElementsByTagName("p")[0].textContent;

paragrafo.textContent = texto.toUpperCase();


document.getElementsByTagName("main")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByTagName("section")[0].style.backgroundColor = "white";
document.getElementsByTagName("h1")[0].textContent = "Exercício 5.1 - JavaScript";

const tagP = document.getElementsByTagName("p");

for (let i of tagP) {
  console.log(i.textContent);
}
document.querySelector('section').appendChild(document.createElement('span'));

let contador = document.querySelector('span');
let clickCount = 0;
const botao = document.querySelector('#botao').addEventListener('click', () => contador.textContent = clickCount += 1);

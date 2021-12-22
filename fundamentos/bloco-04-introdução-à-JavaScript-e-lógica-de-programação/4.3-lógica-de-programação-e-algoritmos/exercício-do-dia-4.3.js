// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (let i = 10; i > 0; i -= 1) {
  fatorial *= i;
}

console.log(fatorial);

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let invertida = '';
for (let i = word.length-1; i >= 0; i --) {
  invertida += word[i];
}
console.log(invertida);

//Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let qtdLetras = []
let maior = array[0];
let menor = array[0];

for (let i of array) {
  qtdLetras.push(i.length);
  if (i.length >= maior.length) {
    maior = i;
  }
  if (i.length <= menor.length) {
    menor = i;
  }
}

console.log(qtdLetras);
console.log(maior);
console.log(menor);

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maoirPrimo = 0;


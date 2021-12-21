let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index of numbers) {
  console.log(index);
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i]
}
console.log(soma)

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length;

console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;

for (let i = 0; i < numbers.length; i += 1) {
  
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}

console.log(maiorValor);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    numerosImpares.push(numbers[i]);
  }
};
if (numerosImpares.length < 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(numerosImpares.length)
};

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  
  if (numbers[i] < menorValor) {
    menorValor = numbers[i];
  }
}

console.log(menorValor);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let conta = [];

for (let i = 0; i < 25; i += 1) {
  conta.push(i + 1);
}
console.log(conta);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
let dividePorDois = [];
for (let i = 0; i < conta.length; i += 1) {
  dividePorDois.push(conta[i] / 2);
}
console.log(dividePorDois);

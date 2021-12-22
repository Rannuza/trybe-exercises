//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo (palavra) {
  let palavraReversa = palavra.split('').reverse().join('');
 
  if (palavraReversa === palavra) {
      console.log(true);
  } else {
      console.log(false);
  }
}
verificaPalindromo('desenvolvimento');

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function procuraIndice (array) {
  let numeroMaior = array[0];
  for (let i of array) {
    if (i > numeroMaior) {
      numeroMaior = i;
    }
  }
  console.log(array.indexOf(numeroMaior));
}
procuraIndice([2, 3, 6, 7, 10, 1]);

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor

function procuraIndice2 (array) {
  let numeroMenor = array[0];
  for (let i of array) {
    if (i < numeroMenor) {
      numeroMenor = i;
    }
  }
  console.log(array.indexOf(numeroMenor));
}
procuraIndice2([2, 4, 6, 7, 10, 0, -3]);

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function procuraNomeMaior (nomes) {
  let maiorNome = nomes[0];
  for (let i of nomes) {
    if (maiorNome.length < i.length) {
      maiorNome = i;
    }
  }
  console.log(maiorNome);
}

procuraNomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function soma (n) {
  let resultado = 0;
  for (let i = 1; i <= n; i += 1) {
    resultado = resultado + i;
  }
  console.log(resultado);
}

soma(5);

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(stringWord, stringEnding) {
  let endingWord = '';
  let contador = stringEnding.length;
  for (let i = stringWord.length-1; i > contador; i -= 1) {
    endingWord += stringWord[i];
  }
  let final = endingWord.split('').reverse().join('');
  if (stringEnding === final) {
    console.log(true);
  } else {
    console.log(false);
  }
}
verificaFimPalavra('joaofernando', 'fernan');

// let a = 30;
// let b = 40;
// let c = 50;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if (a > b && a > c) {
//     console.log(a); 
// } else if (b > a && b > c) {
//     console.log(b);
// } else if (c > a && c > b) {
//     console.log(c);
// }

// let positivoOuNegativo = 0;

// if (positivoOuNegativo === 0) {
//     console.log("zero"); 
// } else if (positivoOuNegativo < 0) {
//     console.log("negative");
// } else if (positivoOuNegativo > 0) {
//     console.log("positive");
// }

// let A = 30;
// let B = 50;
// let C = 80;

// let sum = A + B + C

// switch (sum) {
//     case 180:
//         console.log("true");
//         break;

//     default:
//         console.log("false");
//         break;
// }

// let peca = "Rainha";

// switch (peca.toUpperCase()) {
//     case "REI":
//         console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
//         break;

//     case "RAINHA":
//         console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
//         break;

//     case "BISPO":
//         console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
//         break;

//     case "CAVALO":
//         console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
//         break;

//     case "TORRE":
//         console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
//         break;

//     case "PEÃO":
//         console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
//         break;

//     default:
//         break;
// }

// let nota = 300;

// if (nota >= 90 && nota <= 100) {
//     console.log("A"); 
// } else if (nota >= 80 && nota < 90) {
//     console.log("B");
// } else if (nota >= 70 && nota < 80) {
//     console.log("C");
// } else if (nota >= 60 && nota < 70) {
//     console.log("D");
// } else if (nota >= 50 && nota < 60) {
//     console.log("E");
// } else if (nota >= 0 && nota < 50) {
//     console.log("F");
// }  else if (nota < 0 || nota > 100) {
//     console.log("Nota inválida");
// } 

// let number1 = 19;
// let number2 = 7;
// let number3 = 73;

// if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// function lucro (preco, custo, qtdVendida) {
//     if (preco > 0 && custo > 0 && qtdVendida > 0) {
//         let imposto = (custo / 10) * 2
//         let valorCusto = custo + imposto

//         console.log((preco - valorCusto) * qtdVendida)
//     } else {
//         console.log("Mensagem de erro!")
//     }
// }
// lucro(-100, 75, 1000);


function salarioLiquido (salarioBruto) {
    let INSS;
    let salarioSemInss;
    let IR;

    if (salarioBruto <= 1556.94) {
        INSS = (salarioBruto / 100) * 8;
    } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        INSS = (salarioBruto / 100) * 9;
    } else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
        INSS = (salarioBruto / 100) * 11;
    } else {
        INSS = 570.88;
    }
    salarioSemInss = salarioBruto - INSS;
    
    if (salarioSemInss <= 1903.98) {
        IR = 0; 
    } else if (salarioSemInss > 1903.98 && salarioSemInss <= 2826.65) {
        IR = (salarioSemInss * 0.075) - 142.80;
    } else if (salarioSemInss > 2826.65 && salarioSemInss <= 3751.05) {
        IR = (salarioSemInss * 0.15) - 354.80;
    } else if (salarioSemInss > 3751.05 && salarioSemInss <= 4664.68) {
        IR = (salarioSemInss * 0.225) - 636.13;
    } else {
        IR = (salarioSemInss * 0.275) - 869.36;
    }
    console.log(salarioSemInss - IR);
}

salarioLiquido(3000);
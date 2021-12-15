let qtd = 10;
let ingredientes = ["queijo","presunto","maionese", "hamburguer"];
let sacola = [];
for(let index = 0; index < 10; index+=1){
//console.log('exectuou fora: ', index)

let pao = [];
let hamburguer = [];
for( let index = 0; index < ingredientes.length; index+=1){
// console.log('exectuou dentro: ', index);
/* pao.push(ingredientes[index]) */
if (ingredientes[index] === "hamburguer") {
    hamburguer.push(ingredientes[index])
} else { 
    pao.push(ingredientes[index])
}
}
sacola.push(pao);
sacola.push(hamburguer);
} 
console.log(sacola); 
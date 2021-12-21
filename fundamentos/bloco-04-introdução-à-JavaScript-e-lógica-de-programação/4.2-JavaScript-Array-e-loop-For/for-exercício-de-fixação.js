let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}


//For/of
//Utilize o for/of para imprimir os elementos da lista names com o console.log() :


let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let index of names) {
  console.log(index);
}
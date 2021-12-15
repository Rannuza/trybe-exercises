let a = 30;
let b = 10;
let c = 50;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

if (a > b && a > c) {
    console.log(a); 
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}
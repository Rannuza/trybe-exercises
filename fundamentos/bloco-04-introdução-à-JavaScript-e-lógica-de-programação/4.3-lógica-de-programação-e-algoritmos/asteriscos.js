let n = 5;
let a = "";


/* for (let indice = 0; indice < n; indice++) {
    let a = "";
    for (let i = 0; i < n; i++) {
        a = a + "*";
    }
    console.log(a); 
} */

/* for (let indice = 0; indice < n; indice++) {
    a = a + "*";
    console.log(a);
} */

for (let indice = 0; indice < n; indice++) {
    a = a + "*";
    for (let i = n; i > 0; i--) {
        a = " " + a;
    }
    console.log(a); 
}

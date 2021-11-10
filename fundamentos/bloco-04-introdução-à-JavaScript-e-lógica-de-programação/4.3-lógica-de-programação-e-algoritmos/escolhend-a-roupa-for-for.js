let roupas = ["blusa", "cropped"];
let roupas1 = ["mini-saia", "short"]

console.log("Abra o guarda-roupa");

for (let i = 0; i < roupas.length; i+=1) {
    let roupaEscolhida = [];
    for (let i = 0; i < roupas1.length; i+=1) {
        if (roupas[i] === "cropped") {
            roupaEscolhida.push(roupas[i])
        } else if (roupas1[i] === "mini-saia") { 
            roupaEscolhida.push(roupas1[i])
        }
        }
    console.log("Vista " + roupaEscolhida + " e vá para festa!");
    break;
}


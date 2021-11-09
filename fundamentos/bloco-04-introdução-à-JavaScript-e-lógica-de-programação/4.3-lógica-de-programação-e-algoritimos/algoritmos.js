let guardaRoupas = "Abra o Guarda-roupa"
let escolherRoupa = [];
let roupa = ["blusa"];

console.log(guardaRoupas);

if (roupa == "vestido") {
    escolherRoupa.push(roupa);
    console.log("Você achou o " + escolherRoupa + " " + "perfeito! Suba no seu salto favorito e vá para festa!");

} else if (roupa == "blusa") {
    escolherRoupa.push(roupa);
    console.log("Você achou a" + " " + roupa + " " + "agora escolha um short que combine!")
    
    roupa.push("short");

    console.log("Você achou a " + roupa[0] + " e o " + roupa[1]+ " " + "agora está perfeito!"); 
    console.log("Vista " + roupa[0] + " e " + roupa[1] + ", suba no seu salto favorito e vá para festa!")
    
} else if (roupa == "short") {
    escolherRoupa.push(roupa);
    console.log("Você achou a" + " " + roupa + " " + "agora escolha uma blusa que combine!")
    
    roupa.push("blusa");

    console.log("Você achou o " + roupa[0] + " e a " + roupa[1]+ " " + "agora está perfeito!");
    console.log("Vista " + roupa[0] + " e " + roupa[1] + ", suba no seu salto favorito e vá para festa!")
    
} else {

}
/* console.log("Vista " + escolherRoupa[0] + " e " + escolherRoupa[1] + " e vá para festa!")
 */
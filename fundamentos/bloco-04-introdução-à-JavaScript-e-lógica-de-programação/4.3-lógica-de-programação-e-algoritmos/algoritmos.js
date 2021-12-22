// let guardaRoupas = "Abra o Guarda-roupa"
// let escolherRoupa = [];
// let roupa = ["blusa"];

// console.log(guardaRoupas);

// if (roupa == "vestido") {
//     escolherRoupa.push(roupa);
//     console.log("Você achou o " + escolherRoupa + " " + "perfeito! Suba no seu salto favorito e vá para festa!");

// } else if (roupa == "blusa") {
//     escolherRoupa.push(roupa);
//     console.log("Você achou a" + " " + roupa + " " + "agora escolha um short que combine!")
    
//     roupa.push("short");

//     console.log("Você achou a " + roupa[0] + " e o " + roupa[1]+ " " + "agora está perfeito!"); 
//     console.log("Vista " + roupa[0] + " e " + roupa[1] + ", suba no seu salto favorito e vá para festa!")
    
// } else if (roupa == "short") {
//     escolherRoupa.push(roupa);
//     console.log("Você achou a" + " " + roupa + " " + "agora escolha uma blusa que combine!")
    
//     roupa.push("blusa");

//     console.log("Você achou o " + roupa[0] + " e a " + roupa[1]+ " " + "agora está perfeito!");
//     console.log("Vista " + roupa[0] + " e " + roupa[1] + ", suba no seu salto favorito e vá para festa!")
    
// } else {

// }
/* console.log("Vista " + escolherRoupa[0] + " e " + escolherRoupa[1] + " e vá para festa!")
 */


function meArrumarParaFesta (portaAberta, roupas, sapatos) {
    let look = [];
    if (portaAberta === false) {
        console.log("Abra a porta do guarda-roupa")
    };
    for (let index of roupas) {
        if (index === 'Vestido') {
            look.push(index);
            break;
        } else if (index === 'Croped') {

            look.push(index);
            for (let index of roupas) {
                if (index === 'Short') {
                    look.push(index);
                }
            }
        }
    }
    
    if (look.length <= 1) {
        for  (let i = 0; i <= sapatos.length; i += 1) {
            if (sapatos[i] === 'salto alto') {
                look.push(sapatos[i]);
                break;
            }
        }
    } else {
        for  (let i of sapatos) {
            if (i === 'sapatilha') {
                look.push(i);
                break;
            }
        }
    }
    
    if (look.length > 2){
        console.log('Vista o ' + look[0] + ' e o ' + look[1] + ' e calce ' + look[2]); 
    } else {
        console.log('Vista o ' + look[0] + ' e calce ' + look[1])
    }
}

meArrumarParaFesta(false, ['Vestido', 'Croped', 'Short'], ['tênis', 'salto alto', 'sapatilha'])
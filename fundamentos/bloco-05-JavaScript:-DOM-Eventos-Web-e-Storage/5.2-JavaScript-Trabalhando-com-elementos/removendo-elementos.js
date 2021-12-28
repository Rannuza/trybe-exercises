// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

const pai = document.querySelector("#paiDoPai").firstElementChild;

console.log(pai.childNodes);
console.log(pai.children);

for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
  let filho = pai.childNodes[i]
  if (filho.id !== "elementoOndeVoceEsta") {
    // filho.remove();
    pai.removeChild(filho);
  }
}

const elementoFilho = document.querySelector("#elementoOndeVoceEsta");
elementoFilho.lastElementChild.remove();
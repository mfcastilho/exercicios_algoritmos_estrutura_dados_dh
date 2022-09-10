
let frase = "Otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo";

let verificaSeTemVogal = frase =>{

  frase = frase.toLowerCase();
  let cont = 0;
  for(let letra of frase){
    if(letra.to == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
      cont++;
    }
  }

  if(cont == 0){
    return "Não há vogais na string";
  }
  return cont;
}

console.log(verificaSeTemVogal(frase));

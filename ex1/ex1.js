

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];

let somaPares = function(listaNumeros){
  
  let somandoPares = 0
  for(let numero of listaNumeros){
    if(numero%2==0){
      somandoPares += numero;
    }
  }
    return somandoPares;
  
  };


console.log(somaPares(listaNumeros));
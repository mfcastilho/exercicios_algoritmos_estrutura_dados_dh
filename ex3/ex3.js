
let listaNumeros = [10,8,6,7,-1,-33,4,-76,677,2836,-29387,94,0,44,-2,47];


let retorNumPositivos = listaNumeros =>{
  
  let contaNumPositivos = 0;
  let numPositivos = [];
  for(let numero of listaNumeros){ 
    if(numero > 0){
      numPositivos.push(numero);
      contaNumPositivos++;
    }
  }
  if(contaNumPositivos==0){
    return `Não há números positivos no array`;
  }
  return numPositivos;
};
  
console.log(retorNumPositivos(listaNumeros));


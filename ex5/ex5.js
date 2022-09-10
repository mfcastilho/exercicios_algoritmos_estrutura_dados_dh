let listaNumeros = [3,7,9,10,12,15,34,67,88,90,244,255,300];

let somaNumDivisiveisPor3 = listaNumeros =>{
  
  let somaNumero = 0;
  for(let numero of listaNumeros){
    if(numero%3==0){
      somaNumero += numero;
    }
  }
  return somaNumero;
}

console.log(somaNumDivisiveisPor3(listaNumeros));
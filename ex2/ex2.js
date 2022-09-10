
let numero = 2345;

let parOuImpar = numero => {
  if(numero%2==0){
    return `O ${numero} é PAR!`;
  }
  return `O ${numero} é ÍMPAR!`;
} 

console.log(parOuImpar(numero));
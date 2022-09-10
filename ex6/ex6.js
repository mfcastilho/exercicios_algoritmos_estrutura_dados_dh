

let listaNumeros = [0,1,2,3,4,5,6,7,8,9,10];

let retornaValoresEspelhados = listaNumeros =>{
  let listaInvertida = [];
  for(let i = listaNumeros.length-1; i >= 0; i--){
    listaInvertida.push(listaNumeros[i]);
  }

  return listaInvertida;
}

console.log(retornaValoresEspelhados(listaNumeros));
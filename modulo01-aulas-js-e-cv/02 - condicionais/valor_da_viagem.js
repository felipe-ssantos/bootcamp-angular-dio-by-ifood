//Contém comentários para revisão.

/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

// Resolução

const precoEtanol = 4.59; 
const precoGasolina = 5.89; 
const tipoCombustivel = "etanol"; 
const gastoMedioKm = 10; 
const distanciaViagemKm = 200; 

let precoCombustivel;

if (tipoCombustivel === "etanol") {
  precoCombustivel = precoEtanol;
} else {
  precoCombustivel = precoGasolina;
}

const gastoCombustivel = (distanciaViagemKm / gastoMedioKm) * precoCombustivel;

console.log(
  `O valor gasto de combustível será de R$ ${gastoCombustivel.toFixed(2)}.`
);


/* Esse código é um programa simples que calcula o valor gasto de combustível em uma viagem de carro, 
considerando o tipo de combustível que está no carro, o preço do combustível por litro, 
o gasto médio de combustível do carro por km e a distância da viagem em km. 
Ele usa uma condicional "if" para verificar qual o tipo de combustível que está no carro e, com isso, 
definir o preço do combustível a ser utilizado no cálculo. 
Depois disso, é feita uma multiplicação para calcular o gasto de combustível total e, por fim, 
o programa imprime o resultado na tela. */

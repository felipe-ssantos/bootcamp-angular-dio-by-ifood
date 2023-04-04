/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá três variáveis. Sendo elas:

1 - Preço do combustível;
2 - Gasto médio de combustível do Carro por KM;
3 - Distância em KM da viagem.

Imprima no console o valor que será gasto de combustível, para realizar essa viagem.

*/

const PRECO_COMBUSTIVEL = 4.5;
const GASTO_MEDIO_KM = 10; 
const DISTANCIA_VIAGEM_KM = 200; 

function calcularGastoCombustivel(precoCombustivel, gastoMedioKm, distanciaViagemKm) {
  return (distanciaViagemKm / gastoMedioKm) * precoCombustivel;
}

const gastoCombustivel = calcularGastoCombustivel(PRECO_COMBUSTIVEL, GASTO_MEDIO_KM, DISTANCIA_VIAGEM_KM);

console.log(`Valor gasto em combustível: R$ ${gastoCombustivel.toFixed(2)}.`); 


/* 
Nesse exemplo, assumi que o preço do combustível é R$4,50 por litro, 
o carro gasta em média 10 km por litro e a distância da viagem é de 200 km. 
O resultado será exibido no console, indicando o valor gasto de combustível para realizar a viagem. 
O método toFixed() é utilizado para formatar o resultado com duas casas decimais. 
*/

//Contém comentários para revisão.
/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/* 

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));   
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));    
} 
else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);    
}
else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
} 

*/

const precoEtiqueta = 100;
const formaDePagamento = 4; // Escolha uma opção de 1 a 4

switch (formaDePagamento) {
  case 1:
    console.log("O preço do produto será: " + (precoEtiqueta * 0.9).toFixed(2));
    break;
  case 2:
    console.log("O preço do produto será: " + (precoEtiqueta * 0.85).toFixed(2));
    break;
  case 3:
    console.log("O preço do produto será: " + precoEtiqueta.toFixed(2));
    break;
  default:
    console.log("O preço do produto será: " + (precoEtiqueta * 1.1).toFixed(2));
    break;
}

/* Nesse desafio optei por usar o método 'switch' e uma string "O preço do produto será" que aprendi em outro curso, para deixar a
declaração mais limpa e fácil de entender. */
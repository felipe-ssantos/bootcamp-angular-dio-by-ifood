/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;

function executarDesconto(opcaoPagamento) {
  switch (opcaoPagamento) {
    case 1:
      console.log(
        "O preço do no débito possui 10% de desconto, portanto, o valor será: " + (precoEtiqueta * 0.9).toFixed(2)
      );
      break;
    case 2:
      console.log(
        "O preço do produto no dinheiro ou PIX recebe 15% de desconto, portanto, o valor será: " + (precoEtiqueta * 0.85).toFixed(2)
      );
      break;
    case 3:
      console.log("O preço do produto parcelado em duas vezes não tem desconto: " + precoEtiqueta.toFixed(2));
      break;
    default:
      console.log(
        "O preço do produto parcelado acima de duas vezes recebe 10% de juros, portanto, será: " + (precoEtiqueta * 1.1).toFixed(2)
      );
      break;
  }
}

executarDesconto(1); //Escolha a opção.

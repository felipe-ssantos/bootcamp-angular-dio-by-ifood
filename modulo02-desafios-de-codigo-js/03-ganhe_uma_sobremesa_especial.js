/*
Crie um programa que informe ao usuário se ele pode receber um brinde especial de acordo com o valor total do pedido. 
Se o valor total do pedido for maior ou igual a R$ 50.00, o usuário receberá uma sobremesa grátis. 
Caso contrário, o usuário não receberá nenhum brinde.
*/

const valorPedido = parseInt(gets());

if (valorPedido >= 50) {
  console.log(`Parabéns, você ganhou uma sobremesa grátis!`);
} else {
  console.log(`Que pena, você não ganhou nenhum brinde especial.`);
}

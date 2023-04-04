/*
Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário. 
O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.
*/

const valorHamburguer = parseFloat(gets(10.00));
const quantidadeHamburguer = parseInt(gets(2));
const valorBebida = parseFloat(gets(5.00));
const quantidadeBebida = parseInt(gets(1));
const valorPago = parseFloat(gets(30.00));

const precoTotal = valorHamburguer * quantidadeHamburguer + valorBebida * quantidadeBebida;
const troco = valorPago - precoTotal;

console.log(`O preço final do pedido é R$ ${precoTotal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`);

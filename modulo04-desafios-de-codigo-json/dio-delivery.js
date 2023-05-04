/*
***Desafio***
A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: 
o nome do cliente, 
o endereço de entrega 
e o total do pedido, 
incluindo a taxa de entrega, 
fixa de R$ 5.00.
*/

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
  cliente: gets(),
  endereco: gets(),
  itens: [],
  taxaEntrega: 5.0,
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(gets());
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = gets();
  const precoItem = parseFloat(gets());
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
}

//Resolução
let totalCalculado = 0.0;
for (let item of pedido.itens) {
  totalCalculado += item.preco;
}

totalCalculado += pedido.taxaEntrega;

const mensagemSaida = `Pedido: ${pedido.cliente}\nEndereco de entrega: ${
  pedido.endereco
}\nTotal: R$ ${totalCalculado.toFixed(2)}`;

print(mensagemSaida);

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.

//TODO: Imprima a saída no padrão descrito neste desafio.

//Ignorar: revisão de estudo no Notion.
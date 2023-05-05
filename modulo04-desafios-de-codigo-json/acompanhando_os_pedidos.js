/*
Desafio
Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em um novo 
recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que devem entregar, 
incluindo o nome, endereço, ID e número de telefone da pessoa.

Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) 
as informações do Cliente. Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) 
para os entregadores orquestrarem as entregas dos pedidos.
*/

// Criando um objeto chamado "pedido" com as propriedades "cliente" e "id":
const pedido = {
  cliente: {
    nome: gets(), // Lendo o nome do cliente.
    endereco: gets(), // Lendo o endereço do cliente.
  },
  id: parseInt(gets()), // Lendo o ID do pedido.
};

pedido.cliente.telefone = gets();

const mensagemSaida = `Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
  ID: ${pedido.id}
  Tel: ${pedido.cliente.telefone}`;

print(mensagemSaida);

// Desafio
// O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos 
// JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações.
// O programa deve criar dois objetos 
// JSON contendo o nome do cliente, além do nome e preço de um item selecionado.

// JSON do Cliente 1
const cliente1 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets())
  };
  
  // JSON do Cliente 2
  const cliente2 = { 
    nome: gets(), 
    item: gets(), 
    preco: parseFloat(gets()) 
  };
  
  // Comparação.
  const saoIguais = JSON.stringify(cliente1) === JSON.stringify(cliente2);
  
  //Codicionais
  if (saoIguais) {
    print("Os pedidos são iguais");
  } else {
    print("Os pedidos são diferentes");
  }
  
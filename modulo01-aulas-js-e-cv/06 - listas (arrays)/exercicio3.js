//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ["Vinicius", "Maria", "Viviane", "Pedro", "Vanessa"];

for (let i = 0; i < nomes.length; i++) {
  const nome = nomes[i];
  if (nome.charAt(0) === "V") {
    console.log(nome);
  }
}

/*
Nesse código, é criada uma lista de nomes chamada "nomes", que contém os valores "Vinicius", "Maria", "Viviane", "Pedro" e "Vanessa". 
Em seguida, é utilizado um laço de repetição "for" para percorrer cada elemento da lista "nomes". 
Dentro do laço, é verificado se o primeiro caractere do nome é igual a letra "V" utilizando o método "charAt(0)". 
Caso o nome comece com a letra "V", ele é exibido no console através do comando "console.log(nome)". 
Portanto, ao executar esse código, será exibido no console os nomes "Vinicius" e "Vanessa".
*/
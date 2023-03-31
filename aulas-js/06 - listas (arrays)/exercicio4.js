//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const numerosPares = [];

for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0) {
    numerosPares.push(i);
  }
}

console.log(numerosPares);


/* 
Nesse código, é criada uma lista vazia chamada "numerosPares". 
Em seguida, é utilizado um laço de repetição "for" para percorrer todos os números do intervalo de 10 a 50, 
representados pela variável "i". Dentro do laço, é verificado se o número "i" é par através do operador de módulo (%). 
Se o resultado da operação for igual a zero, ou seja, se "i" for par, ele é adicionado ao final da lista "numerosPares" 
usando o método "push". Por fim, a lista "numerosPares" é exibida no console. Portanto, ao executar esse código, 
será exibido no console a lista de números pares do intervalo de 10 a 50, que são: [10, 12, 14, 16, 18, 20, 22, 24, 
26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50].
*/
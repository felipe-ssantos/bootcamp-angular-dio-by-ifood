// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let numeros = [];

for (let i = 0; i <= 20; i++) {
  let resultado = i % 2 === 0 ? "O número é par" : "O número é ímpar";
  numeros.push({ numero: i, resultado: resultado });
}

console.log(numeros);

/* 
Basicamente, o código cria um array vazio chamado "numeros" e, usando um laço de repetição, preenche esse array com números de 0 a 20 e suas respectivas indicações de par ou ímpar.
Para verificar se um número é par ou ímpar, o código utiliza uma operação matemática chamada "resto da divisão", que retorna o valor que sobra quando um número é dividido por outro. Quando um número é par, ou seja, divisível por 2, o resto da divisão por 2 é zero. Já quando um número é ímpar, o resto da divisão por 2 é sempre 1.
No código, é utilizada uma expressão ternária (um tipo de estrutura condicional) para verificar se o resto da divisão de cada número por 2 é igual a zero ou não. Se for igual a zero, o número é par e a variável "resultado" recebe a mensagem "O número é par". Se o resto da divisão for diferente de zero, o número é ímpar e a variável "resultado" recebe a mensagem "O número é ímpar".
Por fim, o código adiciona cada número e sua respectiva indicação de par ou ímpar em um objeto e coloca esse objeto dentro do array "numeros". Após adicionar todos os números, o array é exibido no console.
*/
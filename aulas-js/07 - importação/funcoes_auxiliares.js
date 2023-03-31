// Função para gerar um número aleatório de 0 a 99
function gets() {
  const valor = Math.floor(Math.random() * 100);
  // Retorna o número gerado
  return valor;
}

// Função para imprimir um texto no console
function print(texto) {
  console.log(texto);
}

// Exporta as funções 'gets' e 'print' para que possam ser usadas em outros módulos
module.exports = { gets, print };


 // Math.random() retorna um número aleatório entre 0 (inclusive) e 1 (exclusive)
// Multiplicando Math.random() por 100, temos um número aleatório entre 0 (inclusive) e 100 (exclusive)
// Math.floor() arredonda o número para baixo, garantindo que o resultado final seja um número inteiro entre 0 e 99 (inclusive)
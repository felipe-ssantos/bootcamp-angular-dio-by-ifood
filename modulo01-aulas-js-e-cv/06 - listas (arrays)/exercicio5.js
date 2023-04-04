// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]

const notas = [2, 7, 3, 8, 10, 4];
const aprovados = [];
const reprovados = [];

for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 7) {
    reprovados.push(notas[i]);
  } else {
    aprovados.push(notas[i]);
  }
}

console.log("Notas dos aprovados:", aprovados);
console.log("Notas dos reprovados:", reprovados);

/* Nesse código, criamos as listas aprovados e reprovados para armazenar as notas correspondentes. 
No laço "for", verificamos se a nota é menor que 7 e adicionamos na lista reprovados, 
caso contrário adicionamos na lista aprovados. Por fim, imprimimos no console as duas listas. */
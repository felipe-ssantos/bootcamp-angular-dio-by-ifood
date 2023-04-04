//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const notas = [2, 7, 3, 8, 10, 4];
let maiorNota = notas[0]; // considera a primeira nota como a maior

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maiorNota) {
    maiorNota = notas[i];
  }
}

console.log("A maior nota é:", maiorNota);

/* Nesse código, criamos a variável maiorNota e a inicializamos com o primeiro elemento da lista notas. 
No laço "for", começamos a iteração a partir do segundo elemento da lista (índice 1) 
e comparamos cada nota com a variável maiorNota. Se a nota for maior, atualizamos o valor de maiorNota. 
No final, imprimimos no console a maior nota encontrada. */
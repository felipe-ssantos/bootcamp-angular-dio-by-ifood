//Definindo/descrevendo a classe 'pessoas'.

class Pessoa {
  //Atributos:
  nome;
  idade;
  anoDeNascimento;

  //Constructor é o que acontece quando uma pessoa é instânciada
  constructor(nome, idade, anoDeNascimento) { //Parâmetros
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  // método
  descrever() {
    //ao declarar o método não precisa usar a 'function'
    console.log(`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
  }
}

// Instância (1) é a ocorrência.
const jose = new Pessoa('José', 25); //Sempre que usa o 'new' ele chama o metódo constructor
// jose.nome = 'José do Egito';
// jose.idade = 25;

// Instância (2)
const moises = new Pessoa('Moises', 31);
// moises.nome = 'Moises do Mar Vermelho';
// moises.idade = 28;

console.log(moises);

// jose.descrever();
// moises.descrever();

// Instância é a ocorrência.
// const felipe = {
//   nome: "Felipe S. Santos",
//   idade: 25,

//   descrever: function () {
//     //função dentro do objeto
//     console.log(`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
//   },
// };

//Qual a pessoa mais velha?
class Pessoa {
    nome;
    idade;
    anoDeNascimento;  
    
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

//p1 e p2 = pessoas
function comparandoIdades(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
  }
}

const jose = new Pessoa("José do Egito", 25);
const moises = new Pessoa("Moisés do Mar Vermelho", 31);

comparandoIdades(jose, moises);

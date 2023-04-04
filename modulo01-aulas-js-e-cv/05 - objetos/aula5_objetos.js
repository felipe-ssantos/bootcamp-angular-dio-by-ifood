
const pessoa = {
  nome: "Felipe S. Santos",
  idade: 25,
  descreve: function (){ //função dentro do objeto
    console.log(`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
  }
};

// felipe.altura = 1.68;

// delete felipe.nome;

// console.log(felipe);

// pessoa.nome = 'Fulano';
// pessoa.idade = 30;

// pessoa.descreve = function () {
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descreve();

//Forma mais dinâmica

// const atributo = 'idade';

console.log(pessoa['nome']); 


//caso não precisar acesar um atributo que não sei o nome, posso recebelo-lo como parâmetro.
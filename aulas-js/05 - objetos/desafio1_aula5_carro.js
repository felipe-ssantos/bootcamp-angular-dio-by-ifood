/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class Carro {
  marca;
  cor;
  gastoMedioKm;

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
  }

  calcularViagem(distanciaKm, precoCombustivel) {
    return distanciaKm * this.gastoMedioKm * precoCombustivel; //calculo do trajeto
  }
}

const fusca = new Carro("Volkswagen", "Verde", (1 / 12).toFixed(2));

console.log("Gasto médio do percurso:", fusca.calcularViagem(70, 5).toFixed(2));

const palio = new Carro("Fiat", "Preto", (1 / 10).toFixed(2));

console.log("Gasto médio do percurso:", palio.calcularViagem(80, 5).toFixed(2));

"use strict";
/**
 * variaveis
 */
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "fulano";
let idade = 30;
let altura = 1.9;
// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "fulano",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
/**
 * arrays
 */
let dados = ["fulano", "ciclano", "beltrano"];
let dados2 = ["fulano", "ciclano", "beltrano"];
let infos = [322, "fulano"];
/**
 * Tuplas
 */
let boleto = ["agua conta", 199.9, 32342342];
/**
 * arrays métodos (são os mesmos do Javascript)
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2023-04-11 18:00");
console.log(aniversario.toString());

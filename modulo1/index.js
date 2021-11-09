//Exercicios de interpretação de código

/* Resposta exercicio 1:

o console (b) vai retornar 10
o console (a, b) vai retornar 10 5

/*Resposta exercicio 2:
o console vai retornar 10 10 10
*/

/*Resposta exercicio 3:
let horasTrabalhadas = 8
let valorRecebidoDiario =80
vai retornar Voce recebe 10 por hora*/



const nome = prompt("Qual o seu nome completo?");
let idade = prompt("Qual a sua idade?");

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);
console.log(typeof nome);
console.log(typeof idade);

//Ambas irão retornar a variavel string, pois a saida é no console, para alterar a variavel
//teria que fazer uma conversão para Number()

let roupaAzul = prompt("Você está de roupa azul?");
let maiorIdade = prompt("Você é maior de idade?");
let cabeloComprido = prompt("Você tem cabelo comprido");

console.log(`Você está de roupa azul? ${roupaAzul}!`);
console.log(`Você é maior de idade? ${maiorIdade}!`)
console.log(`Você tem cabelo comprido?${cabeloComprido}!`)

let a=10
let b=25
let c=a

a=b
b=c

console.log(`O novo valor de a é: ${a} e o novo valor de b é: ${b}`);

let primeiroValor=Number(prompt("Digite o primeiro valor"));
let segundoValor=Number(prompt("Digite o segundo valor"));

console.log(primeiroValor+segundoValor);
console.log(primeiroValor*segundoValor);


//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
EXERCICIO 1
a) O teste pede para o usuario colocar um numero para verificar se ele é par ou impar
b) Para os numeros pares
c) Para os numeros impares
*/
/*
EXERCICIO 2
a) Para o usuario verificar qual o valor da fruta que ele gosta
b) 2.25
c) Ele irá trazer o valor do default
*/
/*
EXERCICIO 3
a) Está pedindo para o usuario inserir um numero e em seguida adicionando uma condicional para caso ele seja maior que zero
b) Se colocar 10 ele irá aparecer "Esse número passou no teste" e se ele colocar -10 ira aparecer que mensagem não está
definidade pois nao tem a função return que chama pra fora do escopo
c)Ira aparecer que não esta definida pois a mensagem não foi chamada para fora do escopo
*/

//EXERCICIOS DE ESCRITA DE ÓDIGO

/*

EXERCICIO 1

let idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18){
    console.log("Você pode dirigir!");
}else{
    console.log("Você não pode dirigir!");
};

*/
/*

EXERCICIO 2

let turno = prompt("Em qual turno voce estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)");

if(turno === "m" || turno === "M"){
    console.log("Bom dia!");
} else if (turno === "v" || turno === "V"){
    console.log("Boa tarde!");
} else{
    console.log("Boa noite!");
};
*/

/*
EXERCICIO 3

let turno = prompt("Em qual turno voce estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)");
let resultado = turno.toUpperCase();
switch (resultado) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break        
    default:
        console.log("Coloque um periodo valido!");
        break;
};
*/
/*

EXERCICIO 4
let genero = prompt("Qual genero de filme vocês vão assistir?");
let preço = Number(prompt("Qual o valor desse filme?"));

if(genero === "fantasia" && preço < 15){
    console.log("Bom filme!");
}else{
    console.log("Escolha outro filme :( ");
};
*/

/*
DESAFIO 1

let genero = prompt("Qual genero de filme vocês vão assistir?");
let preço = Number(prompt("Qual o valor desse filme?"));

if(genero === "fantasia" && preço < 15){
    let lanche = prompt("Qual lanche você vai comprar (pipoca, chocolate, doces, etc)? ")
    console.log(`Bom filme! Aproveite seu ${lanche}`);
}else{
    console.log("Escolha outro filme :( ");
};

*/

let nome = prompt("Qual seu nome completo?");
let tipoDoJogo = prompt("Insira o tipo de jogo que ira assistir, IN para internacional e DO para doméstico");
let etapaDoJogo = prompt(" Insira a etapa que deseja assistir, SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final!");
let categoria = Number(prompt("Qual a categoria que deseja comprar? 1,2,3 ou 4"));
let qtdIngressos = Number(prompt("Quantos ingressos ira querer"))

if(tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 1){
    let valorTotal = qtdIngressos*1320;
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$1320,00
    Valor total: R$${valorTotal},00 `)
    
}else if(tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 2){
    let valorTotal = qtdIngressos*880;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$880,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 3){
    let valorTotal = qtdIngressos*550;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$550,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 4){
    let valorTotal = qtdIngressos*220;
    console.log(
    `Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$220,00
    Valor total:R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 1){
    let valorTotal = qtdIngressos*660;
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$660,00
    Valor total: R$${valorTotal},00 `)
    
}else if(tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 2){
    let valorTotal = qtdIngressos*440;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$440,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 3){
    let valorTotal = qtdIngressos*330;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$330,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 4){
    let valorTotal = qtdIngressos*170;
    console.log(
    `Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$170,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 1){
    let valorTotal = qtdIngressos*1980;
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$1980,00
    Valor total: R$${valorTotal},00 `)
    
}else if(tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 2){
    let valorTotal = qtdIngressos*1320;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$1320,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 3){
    let valorTotal = qtdIngressos*880;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$880,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 4){
    let valorTotal = qtdIngressos*330;
    console.log(
    `Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$330,00
    Valor total: R$${valorTotal},00 `);
    ////INTERNACIONAL
}if(tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 1){
    let valorTotal = qtdIngressos*1320;
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$1320,00
    Valor total: R$${valorTotal},00 `)
    
}else if(tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 2){
    let valorTotal = qtdIngressos*880;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$880,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 3){
    let valorTotal = qtdIngressos*550;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$550,00
    Valor total: R$${valorTotal},00 `);
}else if(tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 4){
    let valorTotal = qtdIngressos*220;
    console.log(
    `Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$220,00
    Valor total:R$${valorTotal},00 `);
}else if(tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 1){
    let valorTotal = qtdIngressos*660;
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$660,00
    Valor total: R$${valorTotal},00 `)
    
}else if(tipoDoJogo === "IN" && etapaDoJogo === "DT" && categoria === 2){
    let valorTotal = qtdIngressos*440;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$440,00
    Valor total: US$${valorTotal/4.10},00 `);
}else if(tipoDoJogo === "IN" && etapaDoJogo === "DT" && categoria === 3){
    let valorTotal = qtdIngressos*330;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$330,00
    Valor total: US$${valorTotal/4.10},00 `);
}else if(tipoDoJogo === "IN" && etapaDoJogo === "DT" && categoria === 4){
    let valorTotal = qtdIngressos*170;
    console.log(
    `Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$170,00
    Valor total: US$${valorTotal/4.10},00 `);
}else if(tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 1){
    let valorTotal = qtdIngressos*1980;
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$1980,00
    Valor total: US$${valorTotal/4.10},00 `)
    
}else if(tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 2){
    let valorTotal = qtdIngressos*1320;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$1320,00
    Valor total: US$${valorTotal/4.10},00 `);
}else if(tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 3){
    let valorTotal = qtdIngressos*880;
    console.log(`
    Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$880,00
    Valor total: US$${valorTotal/4.10},00 `);
}else if(tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 4){
    let valorTotal = qtdIngressos*330;
    console.log(
    `Nome do cliente: ${nome}
    Tipo do jogo: ${tipoDoJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${qtdIngressos}
    Valor do ingresso: R$330,00
    Valor total: US$${valorTotal/4.10},00 `);
}
/* 
INTERPRETAÇÃO DE CÓDIGO

EXERCICIO2

const bool1 = true
const bool2 =false
const bool3 = !bool2

let resultado = bool1 && bool2 // a. irá retornar no console.log false

resultado = bool1 && bool2 && bool3 // b. irá retornar no console.log false

resultado = !resultado && (bool1 || bool2) // c. irá retornar no console.log true

//d.ira retornar no console.log o tipo da variavel que é boolean
*/

/*
EXERCICIO 2
let primeiroNumero = prompt("Digite um número!");
let segundoNumero = prompt("Digite outro número!")
const soma = primeiroNumero+segundoNumero;

//Irá retornar no console.log o resultado concatenada, pois sem a conversão com o Number ele le como string
*/

/*
EXERCICIO 3
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro número"));
const soma = primeiroNumero+segundoNumero

console.log(soma);
*/

/*
ESCRITA DE CÓDIGO

EXERCICIO 1

let minhaIdade = Number(prompt("Qual a sua idade?"));
let idadeAmiga = Number(prompt("Qual idade da sua amiga?"));

console.log(`Sua idade é maior do que de sua melhor amiga? ${minhaIdade>idadeAmiga}`);
console.log(`A diferença entre nossa idades é: ${minhaIdade-idadeAmiga}`);
*/

/*
EXERCICIO 2

let numPar = Number(prompt("Insira um par!"));

console.log(numPar%3);

// Quando insiro um numero par ele retorna 0, pois nao tem resto da divisão, ja colocando um numero impar ele retorna
1 
*/


/*EXERCICIO 3

let age = Number(prompt("Qual a sua idade?"));
let ageMeses = age*12
let ageDias = age*365
let ageHoras = ageDias*24

console.log(`Sua idade é: ${age}, em meses é: ${ageMeses}, em dias é: ${ageDias} e em horas é ${ageHoras}`);
*/



/*
let numeroUm = Number(prompt("Insira o primeiro numero!"));
let numeroDois = Number(prompt("Insira o segundo número!"));
let resto1 = numeroUm%numeroDois
let resto2 = numeroDois%numeroUm

console.log(`O primeiro numero é maior que o segundo? ${numeroUm>numeroDois}
O primeiro numero é igual o segundo? ${numeroUm===numeroDois}
O primeiro numero é divisivel pelo segundo? ${resto1===0}
O segundo numero é divisivel pelo primeiro? ${resto2===0}  `)
*/


/*
let fahrenheit1 = 77;

farhrenheitParaKelvin = (fahrenheit1-32) * (5/9) + 273.15;

console.log(`77°F equivale á ${farhrenheitParaKelvin}K`)

let celsiusUm = 80;
celsiusParaFahrenheit1 = celsiusUm*(9/5) + 32;

console.log(`80°C equivale á ${celsiusParaFahrenheit1}°F`);

let celsiusDois = 30;

celsiusParaFahrenheit2 = celsiusDois*(9/5) + 32;

celsiusParaKelvin = (celsiusDois + 273.15);

console.log(`30°C equivale á ${celsiusParaFahrenheit2}°F e equivale á ${celsiusParaKelvin}K`);

let temperatura = Number(prompt("Insira a temperatura para converter!"))
let conversaoFahrenheit = temperatura*(9/5) + 32;
let conversaoKelvin = temperatura + 273.15;

console.log (`${temperatura}°C equivale á ${conversaoFahrenheit}°F e a ${conversaoKelvin}K`);
*/


/*
let qtdConsumida = 280
let valorKwh = 0.05;
let valorTotal = qtdConsumida*valorKwh
let desconto = valorTotal*0.15


console.log(` O valor total consumido é de: R$${valorTotal} 
e o valor com 15% de desconto fica R$${valorTotal-desconto}`)

*/

/*
let libras = 20
console.log(`${libras}lbs equivalem a ${libras/2.205}kg`);

let ounces = 10.5
console.log(`${ounces}oz equivalem a ${ounces/35.274}kg`);

let milhas = 100
console.log(`${milhas}mi equivalem a ${milhas*1609}mt`);

let feet = 50
console.log(`${feet}ft equivalem a ${feet/3.281}mt`);

let galao = 103.56
console.log(`${galao}gal equivalem a ${galao*3.785}lt`);

let xicara = 450
console.log(`${xicara}xc equivalem a ${(xicara*6)/25}lt`);

let valorConversao= Number(prompt("Insira o valor da unidade que queira converter!"));
console.log(`${valorConversao}oz equivalem a ${valorConversao/35.274}kg`);
*/





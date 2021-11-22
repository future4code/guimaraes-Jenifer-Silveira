//Exercicios de intepretação de código

/* EXERCICIO 1

irá retornar: 

a. vazio
b. null
c. 11
d. 3
e. [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

*/

//EXERCICIO 2

//Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

//Irá retornar SUBI EM UM ÔNIBUS EM MIRROCOS, 29

/// Exercicio de escrita de código

{
//EXERCICIO 1

const emailDoUsuario =  prompt("Digite seu email:");
const nomeDoUsuario = prompt("Digite seu nome de usuario:");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda, ${nomeDoUsuario}!`);
}

{
    //EXERCICIO 2

let comidasPreferidaS = ["feijao","arroz","carne","cafe","batata"]

console.log(comidasPreferidaS);

console.log(`Essa são as minhas comidas preferidas:
${comidasPreferidaS[0]}
${comidasPreferidaS[1]}
${comidasPreferidaS[2]}
${comidasPreferidaS[3]}
${comidasPreferidaS[4]}`)

comidasPreferidaS[1] = prompt("Qual a sua comida preferida?");

console.log(comidasPreferidaS)

}

{
//EXERCICIO 3

let listaDeTarefas = [];

const tarefa1 = prompt("Cite uma tarefa");
const tarefa2 = prompt("cite outra tarefa");
const tarefa3 = prompt("cite mais uma tarefa");

listaDeTarefas.push(tarefa1,tarefa2,tarefa3)

console.log(listaDeTarefas);

let tarefaConcluida = prompt("Qual dessas tarefas voce ja realizou?")

listaDeTarefas.splice(tarefaConcluida, 1)

console.log(listaDeTarefas);
}


{
//DESAFIO 1

let frase = prompt("Digite uma frase:")

console.log(frase.split(" "));


}

//DESAFIO 2


let frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa'];

console.log(`A fruta Abacaxi está no [i] ${frutas.indexOf('Abacaxi')} e o tamanho do array é ${frutas.length}`);


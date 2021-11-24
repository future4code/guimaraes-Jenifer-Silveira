/*Exercícios de interpretação de código

EXERCICIO 1

a)Irá ser impresso:
console.log(filme.elenco[0]) = Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) = Virgina Cavendish
console.log(filme.transmissoesHoje[2]) = canal: "Globo", horario: "14h"

EXERCICIO 2

a)Irá ser impresso:
console.log(cachorro) = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
console.log(gato) = {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}
console.log(tartaruga) = {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}

b)Faz uma cópia dele e traz pra dentro de outro objeto

EXERCICIO 3

Irá trazer:
console.log(minhaFuncao(pessoa, "backender")) = false, pois vai acessar o objeto pessoa e verificar o valor da chave backender
console.log(minhaFuncao(pessoa, "altura")) = undefined, pois vai acessar o objeto pessoa e nao vai achar a chave altura
*/

//EXERCICIO 1

/* const pessoa = {
    nome: "Jenifer",
    apelidos: ["Je", "Jeni", "Jay"]
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de
${pessoa.apelidos[0]},${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}. `)

const novaPessoa = {
    ...pessoa,
    apelidos: ["Jen","Jeje","tu"]
}

console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de
${novaPessoa.apelidos[0]},${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}. `) */

//EXERCICIO 2

const nomeUm = {
    nome: "Jenifer",
    profissao: "Estudante",
    idade: 29
}
const nomeDois = {
    nome: "Elisabeth",
    profissao: "comerciante",
    idade: 63
}

const allNames = (todosNomes) => {
    let nomes = (`${todosNomes.nome}, ${todosNomes.nome.length}, ${todosNomes.idade}, ${todosNomes.profissao}, ${todosNomes.profissao.length}.`);

    return nomes
}

console.log(allNames(nomeUm));
console.log(allNames(nomeDois));
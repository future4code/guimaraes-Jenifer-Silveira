///EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
EXERCICIO 1

a) ira retornar o valor da variavel vezes cinco, no caso 10 e 50
b) não ira aparecer nada no console pois nao tem comando de saida 

*/

/*
EXERCICIO 2

a) Coloca a frase que o usuario digitar em letra minuscula e verifica se contem a palavra cenoura
b) i. eu gosto de cenoura e true
ii. cenoura é bom pra vista e true
iii. cenouras crescem na terra e true

*/

//EXERCICIO ESCRITA DE CÓDIGO
{
//EXERCICIO1

function sobreMim(){
    console.log("Eu sou Jenifer, tenho 29 anos, moro em florianópolis, e sou estudante.")
} 
sobreMim()
}

{
function dadosPessoais(nome,idade,cidade,profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`);
}
dadosPessoais('Jenifer',29,'Florianópolis','estudante');
}


{

//EXERCICIO 3
const soma = (a,b) => {
    return a+b
}
console.log(`o valor da soma é: ${soma(10,5)}!`);

const diferença = (c,d) =>{
    return c-d
}
console.log(`o valor da diferença é: ${diferença(10,5)}!`);

const multiplicação = (e,f) => {
    return e*f
}
console.log(`o valor da multiplicação é: ${multiplicação(10,5)}!`);

const divisao = (g,h) => {
    return g/h
}
console.log(`o valor da divisão é: ${divisao(10,5)}!`)
}

{
//EXERCICIO 2
const numeros = (a,b) => {
    return a+b
}
console.log(numeros(10,5));

const numeros2 = (c,d) => {
    return c === d
}
console.log(numeros2(10,5))

const numeros3 = (e) => {
    if (e%2===0){
        return true
    }else{
        return false
    }
    
}
console.log(numeros3(5))

const frase = (msg) => {
    return msg
}
console.log(frase("essa é uma mensagem gravada"));
}

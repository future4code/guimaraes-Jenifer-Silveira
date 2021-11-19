// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const alturaRetangulo = Number(prompt("Digite a altura do retangulo!"));
  const larguraRetangulo = Number(prompt("Digite a largura do retangulo"));

  console.log(alturaRetangulo * larguraRetangulo);

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual!"));
  const anoNascimento = Number(prompt("Digite seu ano de nascimento!"));

  console.log(anoAtual - anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return (peso / (altura * altura));


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?");
  const idade = Number(prompt("Qual a sua idade?"));
  const email = prompt("Qual o seu email?");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}


// EXERCÍCIO 05
//Escreva uma função que pergunta ao
// usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qualsua primeira cor preferida?");
  const cor2 = prompt("Qual sua segunda cor preferida?");
  const cor3 = prompt("Qual sua terceira cor preferida?")

  const cores = [cor1, cor2, cor3];
  console.log(cores);

}




// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const maiuscula = string.toUpperCase()
  return maiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let qtdIngressos = custo / valorIngresso

  return qtdIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let primeiraString = string1.length
  let segundaString = string2.length

  return primeiraString === segundaString

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  return
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let strings = string1.toUpperCase() === string2.toUpperCase()

  return strings
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual o ano atual?");
  const anoNascimento = prompt("Qual o ano que voce nasceu?");
  const dataEmissao = prompt("Qual a data de emissão da carteira?");

  let idade = anoAtual - anoNascimento;
  let tempoCarteira = anoAtual - dataEmissao;

  if (idade <= 20 && tempoCarteira >= 5) {
    console.log(true)

  } else if (idade > 20 && idade <= 50 && tempoCarteira >= 10) {
    console.log(true)
  } else if (idade > 50 && tempoCarteira >= 15) {
    console.log(true)
  } else {
    console.log(false)
  }
}




// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let idade = prompt("Você tem mais de 18 anos?");

    if (idade === "sim"){
    idade = true
    }else {
    idade = false
    }

  let ensino = prompt("Você tem ensino médio?")

    if (ensino === "sim"){
    ensino = true
    }else{
    ensino = false
    }

  let disponibilidade = prompt("Você tem disponibilidade de horário?")

    if (disponibilidade === "sim"){
    disponibilidade = true
    }else{
    disponibilidade = false
    }

    if (idade && ensino && disponibilidade === true){
    console.log(true)
    }else{
    console.log(false)
    }

}
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

  console.log(alturaRetangulo*larguraRetangulo);

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual!"));
  const anoNascimento = Number(prompt("Digite seu ano de nascimento!"));

  console.log(anoAtual-anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return (peso / (altura*altura));
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?");
  const idade = Number(prompt("Qual a sua idade?"));
  const email = prompt("Qual o seu email?");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Insira a primeira cor");
  const cor2 = prompt("insira a segunda cor");
  const cor3 = prompt("insira terceira cor");
  const cores =[cor1,cor2,cor3];

  console.log(cores);
  


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  

  console.log(string.toUpperCase());

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
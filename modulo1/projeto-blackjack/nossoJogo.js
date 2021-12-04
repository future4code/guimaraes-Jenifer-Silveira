


let partida = confirm("Quer iniciar uma nova partida?");

if (partida) {
   let primeiraCarta = comprarCarta();
   let segundaCarta = comprarCarta();
   let primeiraCartaComputador = comprarCarta();
   let segundaCartaComputador = comprarCarta();

   let pontosJogador = primeiraCarta.valor + segundaCarta.valor;
   let pontosComputador = primeiraCarta.valor + segundaCartaComputador.valor;

   console.log(`As suas cartas foram: ${primeiraCarta.texto} e ${segundaCarta.texto} = ${pontosJogador}`);
   console.log(`As cartas do Computador foram: ${primeiraCartaComputador.texto} e ${segundaCartaComputador.texto} = ${pontosComputador}`);

   if (pontosJogador > pontosComputador) {
      console.log("Parabéns, você ganhou!");
   } else if ( pontosJogador < pontosComputador) {
      console.log("Que pena, voce perdeu :( " );
   } else if (pontosJogador === pontosComputador) {
      console.log("Empate!");
   }

} else {
   console.log("O jogo acabou!");
}
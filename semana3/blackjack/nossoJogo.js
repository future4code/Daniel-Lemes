/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let user = []
let computer = []
let rodadas = 1
console.log("Bem vindo ao jogo de Blackjack")
while( confirm("Quer iniciar uma nova rodada")){  
   console.log(`RODADA ${++rodadas}`)
   carta1 = comprarCarta()
   carta2 = comprarCarta()
   carta3 = comprarCarta()
   carta4 = comprarCarta()
   user = [ carta1.texto , carta1.valor , carta2.texto , carta2.valor]
   computer = [carta3.texto, carta3.valor, carta4.texto, carta4.valor] 
   const obterSoma = (carta1.valor) + (carta2.valor) 
   const obterSoma1 = (carta3.valor) + (carta4.valor) 
   console.log(`usuário= cartas ${carta1.texto} e ${carta2.texto} - valores ${carta1.valor} e ${carta2.valor} - pontuação ${obterSoma} `)
   console.log(`Computador = cartas ${carta3.texto} e ${carta4.texto} - valores ${carta3.valor} e ${carta4.valor} - pontuação ${obterSoma1} `)
   if(user < computer){
      console.log("O usuário ganhou")
   }else if(user > computer){
      console.log("O Computador ganhou")
   }else{
      console.log("Empate")
   }
}
console.log("fim de jogo")

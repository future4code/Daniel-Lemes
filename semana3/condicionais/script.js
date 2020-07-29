//EXERCÍCIO :
/*esse código pedirá para o usuário digitar um número. O teste que ele realiza é saber se o número que o usuário digitou, quando dividido por 2 dará resto 0. Se o usuário digitar números ímpares a condição cairá no else informando no console "não passou no teste". Se o número digitado for par, cairá no if, informando no console "Passou no teste".*/
//EXERCÍCIO 2:
/* A. para mostrar ao usuário quando ele digitar o nome de uma fruta, aparecer o nome e o valor dela.
B. aparecerá 2.25
C. aparece o valor de 5.5.(nesse caso não altera em nada tirando ou deixando o break*/
    //EXERCÍCIO 3:
    /*a. Está pedindo para o usuário por um número e como esse número virá em forma de string por colocar o Number, está conventendo o que o usuário digitar em número.
    B. apareceria "esse número passou no teste"e se fosse o -10 não apareceria nada, pq teria que ter o else para aparecer.
    C. sim haverá, pq o let mensagem está dentro do escopo do filho, e o filho não compartilha as informações que ele tem ali dentro. E o console.log(mensagem) seria o pai querendo saber dessa informação e ele não tem acesso a ela.*/
    //EXERCÍCIO 4:
/*let age = Number(prompt("digite sua idade"))
if(age>=18){
    console.log("Você pode Dirigir")
}else{
    console.log("Você não pode Dirigir")
}*/
//EXERCÍCIO 5:
/*let shift = prompt("Qual seu turno? Digite M , T ou N").toUpperCase()
if (shift==="M"){
    console.log("Bom dia")
} else if (shift==="T") {
    console.log("Boa Tarde")
} else if (shift==="N") {
    console.log("Boa noite")
}else{
    console.log("por favor digite apenas M, T ou n. Obrigado")
}*/
/*let shift = prompt("Qual seu turno? Digite M , T ou N").toUpperCase()
switch(shift){
    case "M":
        console.log("Bom dia")
        break

case "T":
console.log("Boa Tarde")
break
case "N":
    console.log("Boa noite")
    break
    default:
    console.log("por favor digite apenas M, T ou n. Obrigado")
}*/
//EXERCÍCIO 7: com desafio
/*let gender = prompt("qual gênero de filme você vai assistir?").toLowerCase()
let price = Number(prompt("qual o preço do ingresso?"))
let snack =prompt("qual snack você quer comprar?Pipoca, Refrigerante, Chocolate, etc").toLowerCase()

if(gender==="fantasia" && price<=15){
    console.log("Bom filme! com",snack)
}else{
    console.log("Escolha outro filme")
}*/
let fullName = prompt("digite seu nome completo")
    console.log("nome do Cliente:",fullName)

let gameType = prompt("coloque IN para internacional e DO para doméstico").toUpperCase()
console.log("Tipo de jogo:",gameType)
let gameStep = prompt("digite SF para semi-final; DT para terceiro lugar; e FI para final").toUpperCase()
console.log("Etapa do jogo:",gameStep)
let category = Number(prompt("digite 1,2,3 ou 4"))
console.log("Categoria:",category)
let numberOfTickets =Number(prompt("digite a quantidade de ingressos"))
console.log("quantidades de Ingressos:",numberOfTickets)
console.log("---Valores---")

if(gameType==="IN" && gameStep==="SF" && category===1){
    ingresso=5412
    total= ingresso*numberOfTickets
    console.log("valor do ingresso:",ingresso)
    console.log("Valor total:",total)
} else if (gameType === "IN" && gameStep === "DT" && category === 1){
    ingresso = 2706
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "FI" && category === 1) {
    ingresso = 8118
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if(gameType === "DO" && gameStep === "SF" && category === 1){
    ingresso = 1320
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "DT" && category === 1) {
    ingresso = 660
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "FI" && category === 1) {
    ingresso = 1980
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} 

else if (gameType === "IN" && gameStep === "SF" && category === 2) {
    ingresso =3608
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "DT" && category === 2) {
    ingresso = 1804
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "FI" && category === 3) {
    ingresso = 5412
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "SF" && category === 2) {
    ingresso = 880
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "DT" && category === 2) {
    ingresso = 440
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "FI" && category === 2) {
    ingresso = 1320
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "SF" && category === 3) {
    ingresso = 2255
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "DT" && category === 2) {
    ingresso = 1353
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "FI" && category === 3) {
    ingresso = 3608
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "SF" && category === 3) {
    ingresso = 550
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "DT" && category === 3) {
    ingresso = 330
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "FI" && category === 3) {
    ingresso = 880
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "SF" && category === 4) {
    ingresso = 902
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "DT" && category === 4) {
    ingresso = 697
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "IN" && gameStep === "FI" && category === 4) {
    ingresso = 1353
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "SF" && category === 4) {
    ingresso = 220
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "DT" && category === 2) {
    ingresso = 170
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else if (gameType === "DO" && gameStep === "FI" && category === 4) {
    ingresso = 330
    total = ingresso * numberOfTickets
    console.log("valor do ingresso:", ingresso)
    console.log("Valor total:", total)
} else {
    console.log("ERROR")
}

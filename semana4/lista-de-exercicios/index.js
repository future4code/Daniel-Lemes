//EXERCÍCIO 1 DE INTERPRETAÇÃO
/*Resposta = A função conversorDemoeda recebe um parâmetro chamado valorEmDollar. a const contação pergunta para o usuário para informar o valor da cotação e é retornado o valorEmDollar(que é 100 e foi atribuido a const meuDinheiro) x cotacao(que é o valor que o usuário digitará). Portanto no console.log será impresso a multiplicação da função que está retornando o valorEmDollar * cotacao */

// EXERCÍCIO 2 DE INTERPRETAÇÃO
/* Resposta = a função investeDinheiro recebe 2 parâmetros(tipoDeInvestimento, valor). Depois dentro da funçao é declarado uma variável valorAposInvestimento vazia. Daí é feito uma condição com o switch:
se tipodeInvestimento for igual a poupança, o valorAposInvestimento será igual a valor(que é o segundo parâmetro) * 1.03, e o mesmo se dará com Renda Fixa, CDB e Ações. Se o valor digitado pelo usuário não entrar dentro do switch, retornará uma mensagem ("TIPO DE INVESTIMENTO INFORMADO INCORRETO"). E pra essa função é retornado o valorAposInvestimentos. a chamada da função está recebendo 2 variáveis. A const novoMontante que dentro dos parâmetros da função será (Ações(=tipodeinvestimento), 150(=valor)). e a const segundoMontante que dentro dos parâmetros da função será (Tesouso(=tipodeinvestimento), 200(=valor)). No console.log("novoMontante") será impresso 154,50 se for igual a poupança. 157,50 se for igual a renda Fixa. 159 se for igual a CDB. 165 se for igual a Ações. No console.log("segundoMontante") será impresso 206 se for igual a poupança. 210 se for igual a renda Fixa. 212 se for igual a CDB. 220 se for igual a Ações.
*/

// EXERCÍCIO 3
/* Resposta = aí existem 3 const de array a primeira com vários números e as outras vazias. foi feito um laço for of e esse laço percorrerá todo o array numeros. se os números dentro desse array divididos por 2 derem resto 0, ou seja se forem par, entrarão dentro do array1. se o resto dessa divisão não der 0, ou seja se forem ímpares, entrarão dentro do array2. o primeiro console.log da seguinte forma("quantidade total de números, 14") 
o segundo console.log mostrará 6
o terceiro console.log mostrará 8
*/

// EXERCÍCIO 4
/* Resposta = nesse array numeros tb é feito um laço for of de numero of numeros, com a condição de que se o  numerofor menor que numero1 que está como Infinity, o numero1 será numero.ou seja será igual a 1. se numero for maior que numero2(que é igual a 0) numero2 será igual a numero que será o maior numero do array numeros. Portanto no console.log(numero1) será impresso 1 e no console.log(numero2) será impresso 1590
*/

// EXERCÍOS DE lÓGICA DE PROGRAMAÇÃO

// EXERCÍCIO 1
/* Resposta = 
const lista = [1,2,3,"Daniel", 4,5,6,7, true, false]
for(percorrer of lista){
   console.log(percorrer)
}*/
/*const listas = [
    {nome: "Daniel", tipo: "casado", idade: 32},
    { nome: "Leandro", tipo: "casado", idade: 35 },
    { nome: "Lucas", tipo: "solteiro", idade: 27 },
    { nome: "Joyce", tipo: "casada", idade: 34 }
]
listas.forEach((lista,index,array) => {
console.log(lista.nome)
console.log(index)
console.log(array)
})*/

// EXERCÍCIO 2
/* Resposta = 
a = true e false e false
b = true e false ou true
c = false ou true e  false ou true
d = true e false ou false e false
e =  false e false ou true e true true*/

// EXERCÍCIO 3
/* Resposta = do jeito que estava não funcionava, pq a const quantidadeDeNumerosPares, não tinha nenhuma atribuição a ela, e tb no while o i estva <=, para o exercício não necessita de =.*/
/*const quantidadeDeNumerosPares = Number(prompt("digite um número"))
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}*/

//EXERCÍCIO 4
/* Resposta = 
const ladosTriangulo = (a,b,c) =>{
if (a === b & a === c && b === c){
console.log("Equilátero")
}else if (a === b && a !== c || b === c && b !==a || a === c){
    console.log("Isósceles")
}else{
    console.log("Escaleno")
}
} 
ladosTriangulo(4,5,6)
//console.log(ladosTriangulo)*/

// EXERCÍCIO 5
/* 
const divideNumeros = (a, b, ) => {
    if (a>b) {
        console.log("o maior é ", a)
    } else if (b > a) {
        console.log("o maior é", b)
    } 
    if(a % b === 0) {
        console.log(`${a} é divisível por ${b}`)
    } else if (b % a === 0) {
        console.log(`${b} é divisível por ${a}`)
    }if(a % b !== 0) {
        console.log(`${a} não é divisível por ${b}`)
    }

}
divideNumeros(15,30)*/

// ERCÍCIOS DE FUNÇÕES

function recebeArray() {
/*let numeros= [1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < numeros.length; i++) {
        console.log(`${numeros[1]}, ${numeros.length-2}`)
    }
    return numeros
}
recebeArray()

 let mensagem =  () => {
    return "Hello Future4"
}
mensagem()*/
function criarRetangulo(lado1, lado2) {
const retorno = {
    largura:`${lado1}`,
    altura:`${lado2}`,
    perímetro:`2*${lado1} + ${Lado2}`,
    área:`${lado1}*${lado2}`
}
console.log(retorno)
}

criarRetangulo(5,6)

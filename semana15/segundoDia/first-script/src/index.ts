// import {countries} from "./countries";

// console.log(countries)

// let message: string = "Hello Word"


// console.log(message)

// const num1:number = Number(process.argv[2])
// const num2:number = Number(process.argv[3])


// console.log(num1+num2)


// exercício 1A

// let minhaString:string = "daniel"

// minhaString = 50
// console.log(minhaString)


// //exercício 1B
// let meuNumero:(string | number)  = "daniel"
// console.log(meuNumero)

// meuNumero = 50
// console.log(meuNumero)


//exercício 1c

// type info = {
//        nome: string,
//         idade: number,
//       corFavorita:string

//     }


// const pessoa:info =
// {
//     nome: "Daniel",
//     idade: 32,
//     corFavorita: "Azul",
// }
// console.table(pessoa)


//exercício 1D

// type info = {
//        nome: string,
//         idade: number,
//       corFavorita:string  
//     }


// const pessoa:info[] = [
// {
//     nome: "Daniel",
//     idade: 32,
//     corFavorita: "Azul",
// },
// {
//     nome: "Guilherme",
//     idade: 26,
//     corFavorita: "Vermelho",
// },
// {
//     nome: "Leandro",
//     idade: 35,
//     corFavorita: "",
// }]
// console.table(pessoa)


//exercício 1E

// enum CORES_DO_ARCOIRIS{
//     VERMELHO =  "Vermelho",
//      AMARELO = "Amarelo",
//      LARANJA = "Laranja",
//      VERDE = "Verde",
//      AZUL = "Azul",
//       ROXO = "Roxo"

// }

// type info = {
//        nome: string,
//         idade: number,
//       corFavorita:string  
//     }


// const pessoa:info[] = [
// {
//     nome: "Daniel",
//     idade: 32,
//     corFavorita: CORES_DO_ARCOIRIS.AZUL,
// },
// {
//     nome: "Guilherme",
//     idade: 26,
//     corFavorita: CORES_DO_ARCOIRIS.ROXO,
// },
// {
//     nome: "Leandro",
//     idade: 35,
//     corFavorita: CORES_DO_ARCOIRIS.AMARELO,
// }]
// console.table(pessoa)



//Exercício 2A

// type amostraIdades = {
//     numeros: number[],
//     obterEstatisticas: (numeros:number) => object
// }


// function obterEstatisticas(numeros:number[]) {

//     const numerosOrdenados = numeros.sort(
//         (a:number, b:number) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.table(obterEstatisticas([10,2,3,4,5,6,8]))

//exercício 3A


// type postsAmostra = {
//        autor:string,
//        texto:string
//     }[]


// const posts:postsAmostra = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

//   function buscarPostsPorAutor(posts:postsAmostra, autorInformado:string) {
//     return posts.filter(
//       (post) => {
//         return post.autor === autorInformado
//       }
//     )
//   }


//   console.table(buscarPostsPorAutor(posts,"Lord Voldemort"))


//DESAFIOS

//5
// const number = (number1: number, number2: number) => {
//     let soma = number1 + number2
//     let sub = number1 - number2
//     let mult = number1 * number2

//     let maior:(number | string) = number1

//     if (number1 > number2) {
//       maior = number1
//     } else if (number2 > number1) {
//       maior = number2
//     }else {
//         maior = "ambos são iguais"
//     }


//     console.log(`a soma dos números são ${soma} e a subtração é ${sub} e a Multiplicação é ${mult} e o maior é/ou ${maior}`)
// }

// number(50, 50)
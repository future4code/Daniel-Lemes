//EXERCÍCIO 1
//Resposta A = será impresso 2*5=10  e  10*5=50
/*Resposta B = não aconteceria nada, e não apareceria nada na tela pois pra aparecer algo no console é preciso colocar o console.log*/

// EXERCÍCIO 2
//Resposta A =  serão Darvas e Goli
/*Resposta B = seria impresso Amanda e Caio, pq amanda está no index[0] e caio está no index[1], e no laço pede para percorrer até que o index seja menor que index[2]. Como Amanda e Caio está abaixo do index[2], eles serão mostrados no console*/

//EXERCÍCIO 3
//Resposta A = 



//EXERCÍCIO 4
//Resposta A = 
/*function aboutMe(){
    console.log("Me chamo Daniel Lemes, tenho 32 anos, moro em Caçapava-SP e sou estudante")
}
aboutMe()*/

//Resposta B = 
/*function aboutMe (name, age, city, student){
    if(student === true){
        student = "eu sou"
    }else{
        student = "não sou"
    }
   console.log(`Me chamo ${name}, tenho ${age} anos, moro em ${city} e ${student} estudante`)
} 
name="Daniel Lemes"
age = 32
city = "Caçapava-SP"
student = true
let result = aboutMe(name, age, city,student)*/

//EXERCÍCIO 5
/* Resposta A =
function number(numberOne, numberTwo){
    let soma = numberOne + numberTwo
    return soma
}
const result = number(5,8)
console.log(result)*/

/* Resposta B
let number = (numberOne, numberTwo) =>{
if(numberOne >= numberTwo){
numberOne = "maior"
}else {
   numberOne = "menor"
}
return numberOne
}
const result = number(39,9)
console.log(result)*/

// Resposta C
/*function msg (estou, amando, estudar, na, labenu) {
    estou = "Estou"
    amando = "amando"
    estudar = "estudar"
    na = "na"
    labenu = "Labenu"
    let soma = estou + amando + estudar + na + labenu
    let i = 0
    for ( i = 0 ; i < 10; i++)
        console.log(`${estou} ${amando} ${estudar} ${na} ${labenu}`)
}
 msg()*/

 //EXERCÍCIO 6
 // Resposta A = 
/* let array = (arrayParameter) => {
     for(let element of arrayParameter){
        // console.log(element)
     }return arrayParameter.length
 }
 const number = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
 const result = array(number)
 console.log(result)*/

 // Resposta B = 
/*function array(arrayParameter) {
    for (element of arrayParameter) {
         if(element % 2===0){
             console.log(element,("Par"))
         }else {
             console.log(element,("Ímpar"))
         }
    } 
    return arrayParameter.length
}
let number = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const result = array(number)
console.log(result) */

//Resposta C = 
function array (arrayParameter) {
    for (element of arrayParameter) {
        if (element % 2 === 0) {
            console.log(element, ("Par"))
            element ++
        }
    }
    return arrayParameter
}
let number = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const result = array(number)
console.log(result) 

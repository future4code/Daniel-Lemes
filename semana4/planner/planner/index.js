
function createTask(){
const myInput = document.querySelector("#tarefa")
const weekDays = document.querySelector("#dias-semana").value
   valor = myInput.value
    myInput.value = ""

 switch(weekDays){
     case "domingo":
        const domingo = document.querySelector("#domingo")
        domingo.innerHTML += `<li>${valor}</li>`
        break
     case "segunda":
        const segunda = document.querySelector("#segunda")
        segunda.innerHTML += `<li>${valor}</li>`
        break
     case "terca":
        const terca = document.querySelector("#terca")
        terca.innerHTML += `<li>${valor}</li>`
        break
         case "quarta":
        const quarta = document.querySelector("#quarta")
        quarta.innerHTML += `<li>${valor}</li>`
        break
     case "quinta":
        const quinta = document.querySelector("#quinta")
        quinta.innerHTML += `<li>${valor}</li>`
        break
         case "sexta":
        const sexta = document.querySelector("#sexta")
        sexta.innerHTML += `<li>${valor}</li>`
        break
     case "sabado":
        const sabado = document.querySelector("#sabado")
        sabado.innerHTML += `<li>${valor}</li>`
        break
    default:
    alert("digite algo no campo")
}
}

function clearAll () {
   
    const domingo = document.querySelector("#domingo").innerHTML = ""
    const segunda = document.querySelector("#segunda").innerHTML = ""
    const terca= document.querySelector("#terca").innerHTML = ""
    const quarta = document.querySelector("#quarta").innerHTML = ""
    const quinta= document.querySelector("#quinta").innerHTML = ""
     const sexta = document.querySelector("#sexta").innerHTML = ""
    const sabado = document.querySelector("#sabado").innerHTML = ""


}

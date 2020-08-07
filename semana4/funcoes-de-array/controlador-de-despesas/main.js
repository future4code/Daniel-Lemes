const arrayDespesa = []
function buttonClear(){
    let valor = document.querySelector("#tarefa").value
    let tipo = document.querySelector("#tarefa-um").value
    let descricao = document.querySelector("#description").value 
    if(valor === "" || tipo === "" || descricao === "" ){
        alert("preencha os campos vazios")
    } else if (valor !== "" && tipo !== "" && descricao !== ""){
    document.querySelector("#tarefa").value = ""
    document.querySelector("#tarefa-um").value = ""
    document.querySelector("#description").value = ""
    }else{
        alert("por favor coloque um número")
    }

 const objeto = {
        valor:valor, 
        tipo:tipo,
        descrição:descricao
    }
    arrayDespesa.push(objeto) 
    
    console.log(arrayDespesa)
   
}

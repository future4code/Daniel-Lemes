

function capturaObjeto(evento){
    const tituloPost = document.querySelector("#titulo-post")
    valor1 = tituloPost.value
    const autorPost = document.querySelector("#autor-post")
    valor2 = autorPost.value 
    const linkPost = document.querySelector("#link-post")
    valor3 = linkPost.value
    const conteudoPost= document.querySelector("#conteudo-post")
    valor4 = conteudoPost.value
   
    let elements = document.querySelector("#container-de-posts")
    if ( valor1 !== "" && valor2 !=="" && valor3 !== "" && valor4 !== "" ){
        elements.innerHTML += `<li>${valor1}</li> <li>${valor2}</li> <li>${valor3}</li> <li>${valor4}</li>`
        tituloPost.value = ""
        autorPost.value = ""
        conteudoPost.value = ""
        linkPost.value = ""
        console.log(elements)
        if (valor3.includes('.png') || valor3.includes('.jpg')) {
            elements.innerHTML += `<img src=${valor3}>`
        } else {
            alert('Link incorreto! Insira imagem válida')
        }
    }else{
        alert("Digite algo no(s) campo(s) em branco")
    }
 const result = {
        title: valor1,
        Autor: valor2,
        conteudo: valor3
    } 
    resultado = result
    console.log(resultado)
    button = document.querySelector(#button)
    if(button === ""){
        alert("preencha os campos")
    }
}

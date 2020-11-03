// const revertString = prompt("digite uma palavra")

// const result = revertString.split('').reverse().join('');

// document.write(result)


// const palindromo = prompt("digite uma palavra")

// const compara = palindromo 

// const reverte = palindromo.split("").reverse().join("")

// if(compara === reverte){
//     alert("é palindromo")
// }else {
//     alert ("não é")
// }

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();

// alert(fruits)

const retornaLetras( String frase )
{
       String pontos = "";
       String[] letrasPontos;
  
       //Adicionando os pontos depois de cada letra
       for ( int i = 0; i < frase.length(); i++ )
       {
              pontos += frase.substring( i , i + 1) + ".";
       }

        letrasPontos = pontos.split( "." );

    
        return letrasPontos;
}
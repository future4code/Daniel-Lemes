const numero1 = Number(process.argv[3]);
const sinal = process.argv[2];
const numero2 = Number(process.argv[4]);

if(sinal === "add"){
console.log(`${numero1 + numero2}`)
}else if(sinal === "sub") {
    console.log(`${numero1 - numero2}`) 
}else if(sinal === "div") {
    console.log(`${numero1 / numero2}`) 
}else if(sinal === "mult") {
    console.log(`${numero1 * numero2}`) 
}





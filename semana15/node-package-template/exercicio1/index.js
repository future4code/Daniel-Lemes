// console.log("hello word")

const name = process.argv[2];
const age= Number(process.argv[3]);
const ageAfter=  age + 7;


if(!name || !age){
   console.log("Esperava 2 parâmetros só recebi um")
}else {
    // console.log(`Olá ${name}! você tem ${age} anos, e daki a 7 anos você terá ${ageAfter}`)
    console.log('\x1b[33m%s\x1b[0m',`Olá ${name}! você tem ${age} anos, e daki a 7 anos você terá ${ageAfter}` )
}




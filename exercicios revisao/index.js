const countries = require("./countries");

process.argv[0]; //SEMPRE É O NODE
process.argv[1]; //SEMPRE O ARQUIVO QUE ESTAMOS RODANDO
const numero1 = Number(process.argv[2]);
const numero2 = Number(process.argv[3]);

if(isNaN(numero1) || isNaN(numero2)){
    console.log("INSIRA NUMEROS, POR FAVOR")
}else{
    console.log(numero1+numero2);
}



// const searchCountryByName = (name)=>{

//     const filteredCountries = countries.filter((country)=>{
//         return country.name.includes(name);
//     });

//     return filteredCountries;
// }

// const searchCountryByNameAndContinent = (name, continent)=>{

//     const filteredCountries = countries.filter((country)=>{
//         return country.name.includes(name) && country.continent === continent;
//     });

//     return filteredCountries;
// }

// if(!continent){
//     const myCountries = searchCountryByName(name);
//     console.table(myCountries);
// }else{
//     const myCountries = searchCountryByNameAndContinent(name, continent);
//     console.table(myCountries);
// }
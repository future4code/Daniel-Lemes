import { connection } from "../index";

export default async function insertAdress(
    id: string,
    Logradouro: string,
    Número: string,
    Bairro: string,
    Cidade: string,
    Estado: string

) {
    await connection.insert({
        id ,
        Logradouro,
        Número,
        Bairro,
        Cidade,
        Estado
    
    }).into('Adress')
}


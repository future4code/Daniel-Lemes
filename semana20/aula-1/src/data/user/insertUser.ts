import { connection } from "../connection";
import { USER_ROLES } from "../../model/User";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES
) {

    try{

        await connection.insert({
            id,
            name,
            nickname,
            email,
            password,
            role
        }).into('to_do_list_users')
    }catch(error){
        throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
}


import { connection } from "../index";

export default async function insertUser(
    id: string,
    email: string,
    password: string
) {
    await connection.insert({
        id,
        email,
        password
    }).into('User')
}

// const userTableName = "User";

// const createUser = async (
//    id: string, 
//    email: string, 
//    password: string) => {
//  await connection
//    .insert({
//      id,
//      email,
//      password,
//    })
//    .into(userTableName);
// };
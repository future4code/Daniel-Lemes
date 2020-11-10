import { connection } from "../index";

export default async function insertUser(
    id: string,
    email: string,
    password: string,
    role:USER_ROLES
) {
    await connection.insert({
        id,
        email,
        password,
        role
    }).into('User')
}

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}


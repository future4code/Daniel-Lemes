import { connection } from "..";
export default async function getAllUserInfo(id: string): Promise <any> {
    const result = await connection
        .select("*")
        .from("User")
        .where({ id });
    return result[0];
}
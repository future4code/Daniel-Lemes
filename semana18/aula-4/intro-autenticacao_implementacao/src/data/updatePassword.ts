import { connection } from ".."


export async function updatePassword(id:string, newPassword:string){

    await connection.raw(`
    UPDATE User
    SET password = "${newPassword}"
    WHERE id = "${id}"
    `);
}
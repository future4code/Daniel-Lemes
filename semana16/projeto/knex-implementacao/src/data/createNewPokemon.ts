import {connection} from "../index"

export async function createNewUser(
   name: string,
   nickname: string,
   email: string
): Promise<void> {
   try {
      await connection.raw(`
         INSERT INTO TodoListUser (name, nickname, email) VALUES (
            ${name},
            "${nickname}",
            "${email}"
         );
      `)

      console.log("Sucesso")
   } catch (error) {
      console.log(error)
   }
}

export async function createNewUserWithQueryBuilder(
   name: string,
   nickname: string,
   email: string
): Promise<void>{
   try {
      await connection
         .insert({
            name,
            nickname,
            email
         })
         .into("TodoListUser")

      console.log("Sucesso")
   } catch (error) {
      console.log(error)
   }
}
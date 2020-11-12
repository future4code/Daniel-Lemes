import { connection } from "..";

export default async function updateUser(
   id: string,
   email?: string
) {

   await connection("User")
      .update({
         email
      })
      .where({ 
         id 
      })

}
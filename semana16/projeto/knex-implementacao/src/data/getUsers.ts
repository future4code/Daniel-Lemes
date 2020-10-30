import {connection} from "../index"
import { UserType } from "../types";

export async function getUsers():Promise<UserType[]> {
   try {
      const result = await connection.raw("SELECT * FROM Users")

      console.log(result[0])

      return result[0]
   } catch (error) {
      console.log(error)
      return []
   }
}
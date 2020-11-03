import { connection } from "..";

import { inputData, User } from "../types/User";




export const filterUser = async (data: inputData): Promise<User[]> => {
  try {

    const resultPerPage: number = 5;
    const offset: number = resultPerPage * (data.page - 1);

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${data.name}%"
      ORDER BY ${data.orderBy} ${data.orderType}
      LIMIT ${resultPerPage}
      OFFSET ${offset}
    `)
    return result[0]
   
  

    
  
  } catch(e) {
    throw new Error(e.sqlMessage)
  }

}   

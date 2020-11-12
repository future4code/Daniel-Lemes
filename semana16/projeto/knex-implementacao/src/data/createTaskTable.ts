import {connection} from "../index"

export async function createTaskTable():Promise<void>{
   try {
      await connection.raw(`
      CREATE TABLE TodoListTask (
		id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
         );
      `)
      console.log("Sucesso!")
   } catch (error) {
      console.log(error)
   }
}

createTaskTable()
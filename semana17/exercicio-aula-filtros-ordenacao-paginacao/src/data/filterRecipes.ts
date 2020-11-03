import { connection } from "..";
import { inputData, Recipe } from "../types/Recipe";

export const filterRecipes = async (data: inputData): Promise<Recipe[]> => {
  try {

    const resultPerPage: number = 5;
    const offset: number = resultPerPage * (data.page - 1);

    const result = await connection.raw(`
      SELECT * FROM recipes
      WHERE title LIKE "%${data.title}%"
      ORDER BY ${data.orderBy} ${data.orderType}
      LIMIT ${resultPerPage}
      OFFSET ${offset}
    `)

    return result[0]

  } catch(e) {
    throw new Error(e.sqlMessage)
  }
}
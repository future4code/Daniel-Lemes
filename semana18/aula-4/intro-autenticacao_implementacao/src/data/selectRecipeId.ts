import { connection } from "..";

export default async function selectRecipeId(
    id: string
): Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM Recipes
    WHERE id = '${id}';
    `);

    return result[0][0]
}


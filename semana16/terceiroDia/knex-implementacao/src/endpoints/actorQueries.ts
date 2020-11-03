import { Request, Response } from "express"
import { connection } from ".."
// import { getPokemons } from "../data/getPokemons"
// import { Pokemon } from "../types"

// export const getAllPokemons = async (req: Request, res: Response) => {
//    try {

//       const pokemons: Pokemon[] = await getPokemons()

//       if (!pokemons.length) {
//          res.statusCode = 404
//          throw new Error("No pokemons found")
//       }

//       res.status(200).send(pokemons)

//    } catch (error) {
//       console.log(error)
//       res.send(error.message)
//    }
// }
export const searchActor = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result[0][0],
   console.table(result[0][0])
 }

 export const countActors = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
   `);
   const count = result[0][0].count;
   return  result[0][0].count, console.table(count)
 }

//  const updateActor = async (id: string, salary: number): Promise<any> => {
//   await connection("Actor")
//     .update({
//       salary: salary,
//     })
//     .where("id", id);
   
// };

// updateActor("001", 400000)



// avgSalary("female")

export const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });
  return result[0].average, console.log(result[0].average,);
};
 
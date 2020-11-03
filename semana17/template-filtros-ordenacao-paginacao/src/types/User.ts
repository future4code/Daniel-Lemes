import { Recipe } from "./Recipe"

export type User = {
   id: string,
   name: string,
   email: string,
   recipes: Recipe[],
   password: string
}


export type inputData = {
   name: string,
   email: string,
   type: string,
   orderBy: string,
   orderType: string,
   page: number
}

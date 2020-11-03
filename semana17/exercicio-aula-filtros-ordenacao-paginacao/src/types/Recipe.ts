export type Recipe = {
   id: string,
   title: string,
   description: string,
   userId: string,
   createdAt: Date,
}

export type inputData = {
   title: string,
   orderBy: string,
   orderType: string,
   page: number
}

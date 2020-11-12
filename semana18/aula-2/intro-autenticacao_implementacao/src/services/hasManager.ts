import * as bcrypt from 'bcryptjs'


// export default abstract class HashManager {
// static async hash(text: string): Promise<string> {
// const rounds = Number(process.env.BCRYPT_COST)
// const salt = await bcrypt.genSalt(rounds)
// const cypherText = await bcrypt.hash(text, salt)
// return cypherText
// }

// static async compare(text: string, cypherText: string){
// const result = await bcrypt.compare(text, cypherText)
// return result
// }
// }


export const hash = async(plainText:string):Promise<string>=>{
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const cypherText = await bcrypt.hash(plainText,salt)
    return cypherText
}
export const compare = async(plainText:string, cypherText:string):Promise<boolean> =>{
    return bcrypt.compare(plainText,cypherText)
}
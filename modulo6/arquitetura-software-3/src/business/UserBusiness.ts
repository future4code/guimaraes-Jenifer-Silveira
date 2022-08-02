import { UserDatabase } from "../data/UserDatabase";
import { generateId } from "../services/generateId";

export class UserBusiness{
    async create ({ email, name, password}: any):Promise<void>{
        if (!email || !name || !password){
            throw new Error("Dados inválidos")
        }
        const id = generateId()

        const userDatabase = new UserDatabase()
        await userDatabase.create({
            id,
            name,
            email,
            password
        })
    }
}
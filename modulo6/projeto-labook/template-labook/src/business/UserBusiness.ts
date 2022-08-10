import { UserDatabase } from "../data/UserDatabase";
import { generateId } from "../services/generateId"

export class UserBusiness {
    public createUser = async (input: any): Promise <void> => {
        try {
            console.log(this.createUser)
            let message = "deu errado!"
            const { name, email, password } = input
        
            if (!name || !email || !password) {
                throw new Error(message)
            }

            const id: string = generateId()

            const userDatabase = new UserDatabase();
            await userDatabase.insertUser({
                id,
                name,
                email,
                password
            });
            

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}
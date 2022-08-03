import { v4 as uuidv4 } from "uuid"
import { UserDatabase } from "../data/userDatabase"


export class UserBusiness {

    createUser = async (input: any) => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error("Preencha todos os campos")
            }

            const id: string = uuidv4()

            const useDatabase = new UserDatabase
            await useDatabase.insertUser({
                id,
                name,
                email,
                password
            })

        } catch (error: any) {
            throw new Error(error.message)

        }
    }

}
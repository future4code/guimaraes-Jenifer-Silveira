import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public insertUser = async (user: user) => {
        try {
            await UserDatabase.connection
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            .into("Cookenu_users");
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
            

        }
    }

    public findUserByEmail = async (email: string): Promise<user> => {
        try {
            const result = await UserDatabase.connection("Cookenu_users").select().where({email})
            return result[0];
            
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    public findUserByToken = async(token: string): Promise<user> => {
        try {
            const result = await UserDatabase.connection("Cookenu-users").select().where({token})
            return result[0]
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}
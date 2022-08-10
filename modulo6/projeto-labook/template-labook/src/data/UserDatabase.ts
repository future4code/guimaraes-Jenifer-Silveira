import { user } from "../types/types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private userTable = "labook_users"

    public insertUser = async (user: user) => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password

            }).into(this.userTable)

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

}
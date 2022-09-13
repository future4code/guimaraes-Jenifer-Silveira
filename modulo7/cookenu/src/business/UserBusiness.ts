import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword, UserNotFound } from "../error/customError";
import { UserInputDTO, user, LoginInputDTO } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";


const authenticator = new Authenticator()
const hashManager = new HashManager()

export class UserBusiness {
    public signUp = async (input: UserInputDTO): Promise<string> => {
        try {
            const { name, email, password} = input;

            if(!name || !email || !password){
                throw new CustomError(400, "Preencha todos os campos")
            }

            if(password.length < 6){
                throw new InvalidPassword()
            }

            if(!email.includes("@")){
                throw new InvalidEmail()
            }

            const id: string = IdGenerator.generateId()

            const hashPassword = await hashManager.generateHash(password)

            const user: user = {
                id,
                name,
                email,
                password: hashPassword
            };
            const userDatabase = new UserDatabase();
            await userDatabase.insertUser(user);
            
            const token = authenticator.generateToken({id})
            return token

        } catch (error:any) {
            throw new CustomError(400, error.message)
            
        }
    }

    public login = async (input: LoginInputDTO): Promise<string> => {
        try {
            const { email, password} = input;

            if(!email || !password){
                throw new CustomError(400, "Preencha todos os campos")
            }

            

            if(!email.includes("@")){
                throw new InvalidEmail()
            }
                        
            const userDatabase = new UserDatabase();
            const user = await userDatabase.findUserByEmail(email)
            
            if(!user){
                throw new UserNotFound()
            }

            const hashCompare = await hashManager.compareHash(password, user.password)

            if(!hashCompare){
                throw new InvalidPassword()
            }




            const token = authenticator.generateToken({id: user.id})
            return token
            
        } catch (error:any) {
            throw new CustomError(400, error.message)
            
        }
    }
}
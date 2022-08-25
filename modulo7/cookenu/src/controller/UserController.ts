
import { LoginInputDTO,  UserInputDTO } from "../model/user";
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {
    public signUp = async( req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;

            const input: UserInputDTO = {
                name,
                email,
                password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.signUp(input);

            res.status(201).send({message: "Usuário criado com sucesso!", token})

            
        } catch (error: any) {
            res.status(400).send(error.message)
            
        }
    }

    public login = async( req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const input: LoginInputDTO = {
                email,
                password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.login(input);

            res.status(201).send({message: "Login efetuado com sucesso"  , token})

            
        } catch (error: any) {
            res.status(400).send(error.message)
            
        }
    }
}
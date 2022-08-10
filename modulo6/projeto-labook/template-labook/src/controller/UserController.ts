import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            
            const { name, email, password } = req.body

            const input = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness
            userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!" })
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })

        }
    }

}
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO, LoginUserInputDTO } from "../model/user";

export class UserController {
    private userBusiness: UserBusiness
    constructor(){
      this.userBusiness = new UserBusiness()
    }
      
      public signup = async (req: Request, res: Response) => {
        try {
          
          const input :UserInputDTO = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            nickname: req.body.nickname,
            role: req.body.role
          }

          const token = await this.userBusiness.createUser(input)
    
          res.status(201).send({ message: "Usuário criado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
      
      public login = async (req: Request, res: Response) => {
        try {
          const input :LoginUserInputDTO = {
            email: req.body.email,
            password: req.body.password
          }

          const token = await this.userBusiness.login(input)

          res.status(200).send ({message: "Login efetuado com sucesso!", token})
        }catch (error: any) {
          res.status(400).send(error.message)
        }
      }

      public editUser = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string
          const input :EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id
          }

          await this.userBusiness.editUser(input, token)

          res.status(200).send({message: "Usuário alterado com sucesso"})
        }
        catch (error: any){
          res.status(400).send(error.message)
        }
      }


    




}

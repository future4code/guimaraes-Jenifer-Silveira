import { Request, Response } from "express";
import insertUser from "./data/insertUser";
import { v4 as uuidv4 } from 'uuid';;

export default async function createUser(req: Request, res: Response){
    try {
        if ( !req.body.name  || !req.body.email || !req.body.password){
            throw new Error("Preencha todos os campos")
        }

        const id: string = uuidv4();

        await insertUser(
            id,
            req.body.name,
            req.body.email,
            req.body.password

        )

        res.status(200).send("Usuário cadastrado com sucesso!")
    } catch(error){
        console.error({error})
        return res.status(500).send("Algo deu errado.");

        }
    }


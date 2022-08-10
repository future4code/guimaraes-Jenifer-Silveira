import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    async createPost(req: Request, res: Response): Promise<void> {
        try {
            
            const { photo, description, type, authorId } = req.body

            console.log(req.body)

            const input = {
                photo,
                description,
                type,
                authorId
            }
            console.log({input})

            const postBusiness = new PostBusiness
            await postBusiness.createPost(input)
            
            res.status(201).send({ message: "Post publicado com sucesso!" })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })

        }
        
    }
}
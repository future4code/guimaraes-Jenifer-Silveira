import { Request, Response } from "express"
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController{
    async createMovie(req: Request, res: Response): Promise<void>{
        try {
            const { title, description, duration_in_minutes, year_of_release } = req.body;
            const movieBusiness = new MovieBusiness();
            await movieBusiness.createMovie({title, description, duration_in_minutes, year_of_release})

            res.status(200).send({message: "Filme cadastrado com sucesso"})
            
        } catch (error: any) {
            res.status(400).send(error.message)
            
        }
    }
}
import { MovieDatabase } from "../data/MovieDatabase";
import { generateId } from "../services/generateId";

export class MovieBusiness {
    async createMovie({id,title,description,duration_in_minutes,year_of_release}: any): Promise<void>{
        if (!id|| !title ||! description ||! duration_in_minutes ||! year_of_release){
            throw new Error ("Informações inválidas")
        }
        const newId = generateId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.createMovie({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}
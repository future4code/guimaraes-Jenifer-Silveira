import { PostDatabase } from "../data/PostsDatabase";
import { generateId } from "../services/generateId";



export class PostBusiness {
    public createPost = async (input:any) =>  {
        try {
            
            let message="deu erro!"

            const { photo, description, type, authorId} = input

            if(!photo || !description || !type || !authorId){
                throw new Error(message)
            }
            const postId: string = generateId()
            

            const postDatabase = new PostDatabase();
            await postDatabase.insertPost({
                id: postId,
                photo,
                description,
                type,
                authorId: authorId
            })
            

            
            
        } catch (error: any) {
            throw new Error(error.message)
            
        }
    }
}
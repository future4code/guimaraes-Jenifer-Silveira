import { post} from "../types/types";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    private postTable = "labook_posts"

    public insertPost = async (post: post) => {
        try {
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,                
                author_id: post.authorId
            
            }).into(this.postTable)
        } catch (error: any) {
            throw new Error(error.message)

        }
    }
}
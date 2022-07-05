import app from "./app";
import { Request, Response} from "express"
import connection from "./connection";


app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("ok");
    });


    
app.post("/create-table" , async (req:Request, res: Response) => {
    try { 
        const result = await connection.raw(`
        
        CREATE TABLE Rating (
        id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
        rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    )
        `)
        res.send(result)  
        
    } catch (error) {
        console.log({error})
        return  res.status(500).send("Algo deu errado")
        
    }
})    
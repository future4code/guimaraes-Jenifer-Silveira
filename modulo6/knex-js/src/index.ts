import connection from "./connection";
import app from "./app";
import { Request, Response} from "express"

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("ok");
    });
    
app.post("/actor" , async (req:Request, res:Response) => {
    const {name, birth_date, salary, gender} = req.body;

    try {
        await connection.raw(`INSERT INTO Actor  (id, name, birth_date, salary, gender)  
        VALUES (
            7,
            \" ${name}\",
            \"${birth_date}\",
            ${Number(salary)},
            \"${gender}\"
        );`);
    } catch (error) {
        console.log({error})
        return  res.status(500).send("Algo deu errado")
    }
    res.send("ok")


})    
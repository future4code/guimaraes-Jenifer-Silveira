import connection from "./connection";
import app from "./app";
import { Request, Response} from "express"


//Exercicio 1 b
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        SELECT name FROM Actor
        `);
        res.send(result[0]);
    } catch (error) {
        console.log({error})
        return  res.status(500).send("Algo deu errado")
        
    }
    });
//Exercicio 1 c
    app.get("/count-actor", async (req: Request, res: Response) => {
        try {
            const result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = "female"
            `);
            res.send(result[0])
        } catch (error) {
            console.log({error})
            return  res.status(500).send("Algo deu errado")
            
        }
        });   

    
    
app.post("/actor" , async (req:Request, res:Response) => {
    const {name, birth_date, salary, gender} = req.body;

    try {
        await connection.raw(`
        INSERT INTO Actor  (id, name, birth_date, salary, gender)  
        VALUES (
            10,
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

//Exercicio 2 a)
app.post("/actorUpdate", async (req:Request, res:Response)=>{
    
    try {
        const result = await connection.raw(`
        UPDATE Actor
        SET salary = 5000000 WHERE id = 2
        `);
        res.send(result[0])
        
    } catch (error) {
        console.log({error})
        return  res.status(500).send("Algo deu errado")
    }
})

//Exercicio 2 b)
app.post("/delete-actor", async (req:Request, res:Response) =>{
    try {
        const result = await connection.raw(`
        DELETE FROM Actor WHERE id = 8
        `)
        res.send(result[0])
        
    } catch (error) {
        console.log({error})
        return  res.status(500).send("Algo deu errado")
    }
})

//exercicio 2 c)
app.get("/average-salary", async (req:Request, res:Response)=> {
    try {
        const result = await connection.raw (`
        SELECT AVG(salary) FROM Actor WHERE gender = "female"
        `)
        res.send(result[0]);
        
    } catch (error) {
        console.log({error})
        return  res.status(500).send("Algo deu errado")
    }
})

//Exercicio 3 a)
app.get("/actor/:id" , async(req:Request, res:Response) => {
    try {
        const result = await connection.raw(`
        
        
        `)
    } catch (error) {
        console.log({error})
        return  res.status(500).send("Algo deu errado")
    }
})
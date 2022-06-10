import express from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Request, Response} from "express"
import { users } from "./data";
const app = express();

app.use(express.json());
app.use(cors());


app.get("/users", (req: Request, res: Response) => {
    res.status(200). send(users)
})

app.post("/user/newUser", (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const { name, birth, CPF} = req.body

        if (!name || !birth || !CPF){
            errorCode = 422
            throw new Error("Faltam parâmetros")
        }
        let currentDate = new Date() 
        let currentYear = currentDate.getFullYear()
        let age = Number(currentYear - birth)
        
        if(age >= 18){
            errorCode = 422
            throw new Error("Você não tem idade para se cadastrar")
        }
        
    } catch (error: any) {

        
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
    } else {
    console.error(`Failure upon starting server.`);
    }
});


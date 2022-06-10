import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import { User, users, USER_TYPE } from "./data";


const app: Express = express()

app.use(express.json())
app.use(cors())

//Exercicio 1
//a) Foi usado o método GET pois é o método utilizado para pegar informações
//b) /users

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)

})
//Exercicio 2

app.get("/users/type", (req:Request, res: Response) =>{
    let errorCode = 500
    try {
        const type = req.query.type as string

        if (!type){
            errorCode = 422
            throw new Error("Coloque ADMIN ou NORMAL")
        }

        const userType = users.filter((u) => {
            if(type.toUpperCase() === USER_TYPE.NORMAL){
                return u
            }else{
                
                return USER_TYPE.ADMIN
            }
        })
        res.status(errorCode).send(userType)
        
    }catch (error: any) {
        res.status(errorCode).send(error.message)

    }
    

})

//Exercicio 3
//a) é utilizado o query

app.get("/user", (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const name = req.query.name as string

        if (!name) {
            errorCode = 422
            throw new Error("Falta passar parâmetro de busca")
        }

        const user = users.filter(u => u.name.toLowerCase() === name.toLowerCase())

        if (!user.length) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(errorCode).send(user)

    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }

})

//Exercicio 4

app.post("/user/create", (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const { name, email, type, age } = req.body

        if (!name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Faltam parâmetros a serem passados")
        }

        const newUser: User = {
            id: Math.random(),
            name: name,
            email: email,
            type: type,
            age: age
        }

        if (type !== USER_TYPE.ADMIN || type !== USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error("Inserir usúario válido!")
        }

        users.push(newUser)

    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
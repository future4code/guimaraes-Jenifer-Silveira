import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Okkkkkkkk")
})


//Exercicio 1
//a) Serve para determinar qual parametro será recebido (string, number, boolean)

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    //private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}
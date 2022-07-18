import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Ok!")
})


//Exercicio 1
//a) Serve para determinar qual parametro será recebido (string, number, boolean)
//c) Através do constructor 

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string,
    ){
        this.description = description;
        this.value = value;
        this.date = date;
    }
}
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
        balance: number,
    ) {
        
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    public getCpf(): string{
        return this.cpf
    }

    public getName(): string{
        return this.name
    }

    public getAge(): number{
        return this.age
    }

    
    public getBalance() : number{
        return this.balance
    }

    public getTransaction() : Transaction[] {
        return this.transactions
    }

    public setBalance (value: number): void {
        this.balance += value
    }

    public setTransactions(newBalance: Transaction):void{
        this.transactions.push(newBalance)
    }

}
//const userInfo = new UserAccount("088.178.089-53","Jenifer Kindermann", 30);

const newBalance  = new UserAccount("088.178.089-53","Jenifer", 30, 1000)

console.log(newBalance)







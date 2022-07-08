import connection from "./connection";
import app from "./app";
import { Request, Response } from 'express';
import createUser from "../src/createUser"

app.get("/path", (req: Request, res: Response) => {
    res.status(200).send("okkk!!")
    });
    
app.post("/user" , createUser);

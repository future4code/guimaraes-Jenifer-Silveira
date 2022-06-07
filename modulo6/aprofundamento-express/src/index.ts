import express from "express";
import cors from "cors";
//import { AddressInfo } from "net";
import { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());



app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Deu certo")

})

app.listen(3003, () => {
    console.log("servidor em pé")
})
/*
const server = app.listen(process.env.PORT || 3000, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})*/
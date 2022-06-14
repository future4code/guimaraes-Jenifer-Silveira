import express from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { Request, Response} from "express"
import { products} from "./data"
const app = express();

app.use(express.json());
app.use(cors());

/*app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello world!!!")
})*/


app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)

})

app.post("/cadastro", (req: Request, res: Response) => {
    res.status(201).send("produto cadastrado com sucesso")
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
    } else {
    console.error(`Failure upon starting server.`);
    }
});




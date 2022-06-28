import app from "./app";
import connection from "./connection";
import { Request, Response} from "express"


app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("blalblalala");
    }); 
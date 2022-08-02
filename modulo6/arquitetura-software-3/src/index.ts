import { app } from "./app"
import { userRouter } from "./controller/routes/userRouter"

app.use("/user", userRouter)
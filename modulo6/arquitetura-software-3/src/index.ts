import { app } from "./app"
import { movieRouter } from "./controller/routes/movieRouter"
import { userRouter } from "./controller/routes/userRouter"

app.use("/user", userRouter)

app.use("/movie", movieRouter)
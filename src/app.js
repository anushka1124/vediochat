import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)
// app.use("/api/v1/healthcheck",)
// app.use("/api/v1/tweets",)
// app.use("/api/v1/subscriptions",)
// app.use("/api/v1/vedios",)
// app.use("/api/v1/comments",)
// app.use("/api/v1/likes",)
// app.use("/api/v1/playlist",)
// app.use("/api/v1/dashboard",)

export { app };
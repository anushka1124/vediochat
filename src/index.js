// require('dotenv').config({path: './env})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Node connection failed : ", error);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!! ", err)
});



/*
import express from "express";
const app = express();
// ;( //semicolon for cleaning purpose so that if after above code semicolon is not done it will took care of
(
    async () => {
        try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR: ", error);
                throw error
            });

            app.listen(process.env.PORT, () => {
                console.log(`App is listenig on port ${process.env.PORT}`);
            })
        }catch(error) {
            console.error("ERROR: ", error)
            throw error
        }
    }
)()*/
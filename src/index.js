// require('dotenv').config({path: './env})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();



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
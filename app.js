import  express from "express";
import connectDb from "./db/connectionDb.js";
import userRoutes from "./Routes/Route.js";

const app=express();
connectDb();

app.use(express.json())


app.use("/",userRoutes);

app.listen(3000,()=>{
    console.log("server started");
})



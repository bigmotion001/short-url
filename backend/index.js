import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";
import urlRoutes from "./routes/url.route.js";
import indexRoutes from "./routes/index.route.js";
import path from "path";
import cors from "cors";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
   res.send("Short URL Running");
})
app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use(express.json());

const __dirname = path.resolve();
app.use("/", indexRoutes);
app.use("/api/v1", urlRoutes);



if(process.env.NODE_ENV==="production"){
   app.use(express.static(path.join(__dirname, "../frontend/dist")));
 
   app.get("*", (req, res)=>{
     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
   })
 }
 




app.listen(PORT, ()=>{
    connectDB();
   console.log(`server running on port ${PORT}`);
})
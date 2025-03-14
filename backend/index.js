import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();



app.get("/", (req, res)=>{
   res.send("Short URL Running");
})







app.listen(5000, ()=>{
   console.log("server running on port 5000");
})
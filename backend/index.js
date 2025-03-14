import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";
import urlRoutes from "./routes/url.route.js"
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
   res.send("Short URL Running");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", urlRoutes);




app.listen(PORT, ()=>{
    connectDB();
   console.log(`server running on port ${PORT}`);
})
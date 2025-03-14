import express from "express";
import { storeURL } from "../controller/url.controller.js";
const router= express.Router();

router.post("/short", storeURL);




export default router;
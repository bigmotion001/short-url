import express from "express";
import { getUrl, text } from "../controller/url.controller.js";
const router= express.Router();


router.get("/:code", getUrl);
router.get("/login", text);




export default router;
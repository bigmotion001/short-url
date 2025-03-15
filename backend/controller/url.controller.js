import validURL from "valid-url";
import Url from "../model/url.js";
import { customAlphabet } from 'nanoid'
import express from 'express'






export const storeURL = async(req, res)=>{
    const protocol = req.protocol;
    const host = req.hostname;
    const port = process.env.PORT || PORT;

    const fullUrl = `${protocol}://${host}:${port}`
    console.log(fullUrl)
    try{

        const {longUrl} = req.body;
    //check if longurl is not provided
    if(!longUrl)return res.status(401).json({success: false,message: "Please enter a url"});
    //check if url is valid
    if(!validURL.isUri(longUrl)) return res.status(401).json({success: false, message: "invalid URL"});

    //check if longurl already exist
    let existUrl = await Url.findOne({longUrl});
    if(existUrl)return res.status(200).json(existUrl.shortUrl);

    //store url
    const nanoid = customAlphabet('MuG70DvIubs3dgetsuda1', 10)
    const BASE_URL = process.env.NODE_ENV === "development"? process.env.BASE_URL : fullUrl;
    const urlCode = nanoid();
    const shortUrl = BASE_URL + '/' + urlCode;
    const url = new Url({ shortUrl, longUrl, urlCode});

    //save url
    await url.save();
    return res.status(201).json(shortUrl);

    }catch(e){
        return res.status(500).json(`"error in url", ${e.message}`);
        console.log("error in storing url", e.message);

    }

}

export const getUrl = async(req, res, next)=>{
   

    try {

        const {code} = req.params;
        //check if code exist
        const urlCode = await Url.findOne({urlCode: code});
        if(urlCode) {
            urlCode.click++;
            urlCode.save();
            return res.redirect(urlCode.longUrl)
        }else{
            next();
        }
        
    } catch (e) {
        
        console.log("error in getting short url code", e.message);
        
    }

}

export const text = async(req, res)=>{
    res.send("login page");
}
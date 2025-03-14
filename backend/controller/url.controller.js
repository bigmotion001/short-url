import validURL from "valid-url";
import Url from "../model/url.js";
import { customAlphabet } from 'nanoid'



export const storeURL = async(req, res)=>{
    
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
    const nanoid = customAlphabet('1234567890abcdef', 10)
    const BASE_URL = process.env.BASE_URL;
    const urlCode = nanoid();
    const shortUrl = BASE_URL + '/' + urlCode;
    const url = new Url({ shortUrl, longUrl, urlCode});

    //save url
    await url.save();
    return res.status(201).json(url);

    }catch(e){
        return res.status(500).json(e.message);
        console.log("error in storing url", e.message);

    }

}
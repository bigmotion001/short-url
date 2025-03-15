import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortUrl:{
        type: String,
        required:[true, "shortUrl is required"]
    },
    longUrl:{
        type: String,
        required: [true, "long url is required"]
    },
    urlCode:{
        type: String,
        required:  [true, "Url code is required"],
        
    },
    click:{
        type: Number,
        default:0
    }
}, {timestamps: true});
const Url = mongoose.model("Url", urlSchema);
export default Url;
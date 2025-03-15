import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/v1" : "/";
axios.defaults.withCredentials = true;

export const useUrlStore = create((set) => ({
    storeUrl: null,
    isLoading: false,
    
shortenUrl: async(longUrl)=>{
    set({isLoading: true});
    try {
        const res = await axios.post(`${API_URL}/short`, {longUrl});
        set({storeUrl: res.data});
        
        
    } catch (error) {
        
        throw error.response.data.message;
    }finally{
        set({isLoading: false});
    }
}

}))
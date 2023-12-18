import mongoose from "mongoose";

const uri=process.env.URL

export const connectDb = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(uri)
    }
    catch(err){
        console.log(err)
    }

}

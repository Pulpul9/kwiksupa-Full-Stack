import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGODB_URL){
    throw new Error(
        "Please provide MONGO_URI"
    )
}

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect DB")
    } catch (error){
        console.log("connect DB error",error)
        process.exit(1)
    }
}

export default connectDB
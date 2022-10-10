import mongoose from "mongoose";

const connectDB = () =>{
    return mongoose.connect("mongodb://localhost:27017/final-project")
}

export default connectDB
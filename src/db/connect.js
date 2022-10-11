import mongoose from "mongoose";

// * Connection with Mongo Compass to local database
// const connectDB = () =>{
//     return mongoose.connect("mongodb://localhost:27017/final-project")
// }

// * Connection with Mongo Atlas to cloud database
const connectDB = () =>{
    return mongoose.connect(`mongodb+srv://squad_turing:${process.env.ACCESS_MONGO_ATLAS}@cluster0.8hr4egj.mongodb.net/?retryWrites=true&w=majority/final-project`)
}

export default connectDB
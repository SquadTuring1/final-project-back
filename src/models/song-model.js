import mongoose from "mongoose";

const SongSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            trim: true,
            required: [true, "Title is required"]
        },
        fileUrl: {
            type:String,
            required: [true,"Url is required"]
        },
        thumbnail: {
            type: String
        },
        released: {
            type: Date,
        },
        duration: {
            type:Number
        },
        album: [{
            type: mongoose.Schema.ObjectId,
            ref: "album" 
        }],
        genre: {
            type: mongoose.Schema.ObjectId,
            ref: "genre" 
        },
        likedBy: [{
            type: mongoose.Schema.ObjectId,
            ref: "user" 
        }],
    },
    {timestamps: true},
)

const SongModel = new mongoose.model("song", SongSchema)

export default SongModel


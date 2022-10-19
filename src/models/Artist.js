import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema(
    {
        artistName: {
            type: String, 
            trim: true       
        },
        artistDescription: {
            type: String,
            trim: true        
        },
    })

const ArtistModel = new mongoose.model("artist", ArtistSchema)

export default ArtistModel
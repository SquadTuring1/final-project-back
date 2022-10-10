import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema(
  {
    title: {
        enum: ["Pop",
            "Rock",
            "Hip Hop",
            "Jazz",
            "Country",
            "R&B",
            "Electronic",
            "Metal", 
            "Classical",
            "Dance",
            "Alternative", 
            "Reggae", 
            "Indie",
            "World", 
            "Soul",
            "Punk",
            "New-Age",
            "House",
            "Techno",
            "Latin"]
    }
  },
  { timestamps: true },
  )

  const GenreModel = new mongoose.model("genre", GenreSchema);

  export default GenreModel;  
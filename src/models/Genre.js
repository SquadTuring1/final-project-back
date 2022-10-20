import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema(
  {
    title: {
        enum: ["Pop",
            "Rock",
            "Hip Hop",
            "Kpop",
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
            "Soul",
            "Punk",
            "Latin"]
    }
  },
  { timestamps: true },
  )

  const GenreModel = new mongoose.model("genre", GenreSchema);

  export default GenreModel;  
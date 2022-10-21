import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: [
        "Pop",
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
        "Latin",
      ],
      default: "Pop",
    },
    imgUrl: {
      type: String,
    },
    songs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "song",
      },
    ],
  },
  { timestamps: true },
);

const GenreModel = new mongoose.model("genre", GenreSchema);

export default GenreModel;

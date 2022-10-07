import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    year: {
      type: Date,
    },
    thumbnail: {
      type: String,
    },
    totalTracks: {
      type: Number,
    },
    likedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true },
);

const AlbumModel = new mongoose.model("album", AlbumSchema);

export default AlbumModel;

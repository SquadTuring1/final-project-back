import mongoose, { Schema } from "mongoose";

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artist",
    },
    fileUrl: {
      type: String,
      required: [true, "Url is required"],
      // unique: true
    },
    imageUrl: {
      type: String,
    },
    released: {
      type: Date,
    },
    thumbnail: {
      type: String,
    },
    cloudinaryId: {
      type: String,
    },
    duration: {
      type: Number,
    },
    album: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "album",
      },
    ],
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "genre",
    },
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true },
);

const SongModel = new mongoose.model("song", SongSchema);

export default SongModel;

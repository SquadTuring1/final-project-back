import mongoose, { Schema } from "mongoose";

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
    },
    artist: {
      type: String,
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
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    likedBY: [
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

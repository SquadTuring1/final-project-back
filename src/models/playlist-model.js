import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema(
  {
    title: {
        type:String,
        required: [true, "Title is required"]
    },
    description: {
        type: String 
    },
    thumbnail: {
        type:String
    },
    isPrivate: {
        type: Boolean,
        required: [true, "Private is required"]
    },
    songs: [{
        type: mongoose.Schmema.ObjectId,
        ref: "song"
    }],
    numberSongs: {
        type: Number
    },
    followers: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "user",
        },
      ],
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
  },
  { timestamps: true },
  )

  const PlaylistModel = new mongoose.model("playlist", PlaylistSchema);

  export default PlaylistModel;  
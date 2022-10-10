import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: ({ value }) => `the emailadd ${value} is not valid`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "The password is too short"],
    },
    token: {
      type: String,
      // required: true
    },
    avatar: {
      type: String,
    },
    following: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
    ],
    followedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
    ],
    likedSongs: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "song",
      },
    ],
    likedPlaylists: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "playlist",
      },
    ],
    ownPlaylists: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "playlist",
      },
    ],
  },
  { timestamps: true },
);

UserSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

const UserModel = new mongoose.model("user", UserSchema);

export default UserModel;

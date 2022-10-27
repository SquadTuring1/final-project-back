import cloudinary from "../../cloudinary.js";
import UserModel from "../models/User.js";

const updateAccout = async (req, res) => {
  const { uid, firstName, lastName, username } = req.body;
  const { path } = req.file;

  try {
    const account = await UserModel.find({ uid: uid });

    const avatarCloudinary = await cloudinary.uploader.upload(path, {
      folder: "accout-avatars",
      resource_type: "image",
    });

    if (account[0] && avatarCloudinary) {
      await UserModel.findByIdAndUpdate(
        { _id: account[0]._id.toString() },
        { firstName, lastName, username, avatar: avatarCloudinary.url },
      );
    } else {
      res.status(404).send("User does not exsist or avatar cannot upadate");
    }
    res.status(200).send(account);
  } catch (error) {
    res.status(500).send({
      error: "something went wrong",
      errorMsg: error.message,
    });
  }
};

const signup = async (req, res, next) => {
  const { token, uid, email } = req.body;
  try {
    const newUser = await UserModel.create({
      token,
      uid,
      email,
    });
    res.status(201).send({ data: "Success! " });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { signup, updateAccout };

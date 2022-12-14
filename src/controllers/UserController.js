import { UserModel } from "../models/index.js";

// For future perpouses

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find({})
      .populate({
        path: "following",
        select: ["firstName"],
      })
      .populate({ path: "followedBy", select: ["firstName"] });
    res.status(200).send({
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

const updateCurrentUser = async (req, res, next) => {
  const { firstName, lastName, avatar, username } = req.body;
  const { uid } = req.params;
  console.log(username);

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { uid: uid },
      { $set: { firstName, lastName, avatar, username } },
      { new: true },
    );
    res.status(200).send({
      success: "User was updated",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  const { uid } = req.params;
  try {
    const currentUser = await UserModel.find({ uid })
      .populate({
        path: "ownPlaylists",
      })
      .populate({ path: "ownSongs", select: ["title"] });
    res.status(200).send({
      currentUser: currentUser,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const userToDelete = await UserModel.findOneAndDelete({ id: id });
    res.status(200).send({
      message: "User deleted",
      userToDelete,
    });
  } catch (error) {
    next(error);
  }
};

export { getAllUsers, updateCurrentUser, getCurrentUser, deleteUser };

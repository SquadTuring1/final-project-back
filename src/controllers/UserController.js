import UserModel from "../models/User.js";

const signup = async (req, res, next) => {
  const { uid, email } = req.user; // coming from firebase auth middlewere

  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      return res.sendStaus(200);
    }

    const newUser = await UserModel.create({ uid: uid, email: email });
    res.sendStaus(201);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find({});
    res.status(200).send({
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

const updateCurrentUser = async (req, res, next) => {
  const { firstName, lastName, avatar, email } = req.body;
  const { id } = req.params;

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { id: id },
      { $set: { firstName, lastName, avatar, email } },
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

const getCurrnetUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const currentUser = await UserModel.findOne({ id: id });
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
  } catch (error) {}
};

const UserControllerActions = {
  getAllUsers,
  updateCurrentUser,
  getCurrnetUser,
  deleteUser,
  signup,
};

export default UserControllerActions;

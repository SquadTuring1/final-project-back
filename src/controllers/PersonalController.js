import { UserModel } from "../models/index.js";

const followSomeone = async (req, res, next) => {
  const { id: userToFollowId } = req.params;
  const { me } = req.body;
  try {
    // updating followed user
    const updatedFollowedUser = await UserModel.findByIdAndUpdate(
      { _id: userToFollowId, followedBy: { $ne: me } },
      { $addToSet: { followedBy: me } },
    );

    // updating following user
    const updateFollowingUser = await UserModel.findByIdAndUpdate(
      { _id: me, following: { $ne: userToFollowId } },
      { $addToSet: { following: userToFollowId } },
    );
    res.status(200).send({ success: `Success` });
  } catch (error) {
    next();
  }
};

const getMyFollowers = async (req, res, next) => {
  const { id: me } = req.params;
  try {
    const myFollowers = await UserModel.findById({ _id: me }).populate({
      path: "followedBy",
      select: ["username", "firstName", "avatar"],
    });
    const { followedBy } = myFollowers;
    res.status(200).send({ myFollowers: followedBy });
  } catch (error) {
    next();
  }
};

const getMyFollowing = async (req, res, next) => {
  const { id: me } = req.params;
  try {
    const myFollowing = await UserModel.findById({ _id: me }).populate({
      path: "following",
      select: ["username", "firstName", "avatar"],
    });
    const { following } = myFollowing;
    res.status(200).send({ myFollowing: following });
  } catch (error) {
    next();
  }
};

const getMyLikedSongs = async (req, res, next) => {
  const { id: me } = req.params;
  try {
    const myLikedSongs = await UserModel.findById({ _id: me }).populate({
      path: "likedSongs",
      select: ["title", "artist", "fileUrl", "imageUrl"],
    });
    const { likedSongs } = myLikedSongs;
    res.status(200).send({ myLikedSongs: likedSongs });
  } catch (error) {
    next();
  }
};

const getMyOwnSongs = async (req, res, next) => {
  const { id: me } = req.params;
  try {
    const myOwnSongs = await UserModel.findById({ _id: me }).populate({
      path: "ownSongs",
      select: ["title", "artist", "fileUrl", "imageUrl"],
    });
    const { ownSongs } = myOwnSongs;
    res.status(200).send({ ownSongs });
  } catch (error) {
    next();
  }
};

export {
  followSomeone,
  getMyFollowers,
  getMyFollowing,
  getMyLikedSongs,
  getMyOwnSongs,
};

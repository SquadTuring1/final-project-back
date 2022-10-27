import cloudinary from "../../cloudinary.js";
import PlaylistModel from "../models/Playlist.js";
import UserModel from "../models/User.js";

const getAllPlaylists = async (req, res, next) => {
  try {
    const playlists = await PlaylistModel.find();

    res.status(200).send({ playlists });
  } catch (error) {
    next();
  }
};

const getPlaylistById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const playlist = await PlaylistModel.findById(id)
      .populate({
        path: "songs",
      })
      .populate({
        path: "songs",
        populate: {
          path: "genre",
          select: "title",
        },
      })
      .lean()
      .exec();

    res.status(200).send({ playlist });
  } catch (error) {
    next();
  }
};

const createPlaylist = async (req, res, next) => {
  const { title, description, isPrivate, userId, songs } = req.body;
  try {
    const playlist = await PlaylistModel.create({
      title,
      description,
      isPrivate,
      userId,
      songs,
    });

    const updateUserOwnPlaylist = await UserModel.findByIdAndUpdate(
      {
        _id: userId,
      },
      { $push: { ownPlaylists: playlist._id } },
    );
    res.status(201).send({ playlist });
  } catch (error) {
    next();
  }
};

const updatePlaylistInfoById = async (req, res, next) => {
  const { id } = req.params;
  const { description, title } = req.body;
  const thumbnailPath = req.file.path;

  try {
    const uploadToCloudinary = await cloudinary.uploader.upload(thumbnailPath, {
      folder: "playlist-thumbnail",
      resource_type: "image",
    });
    const { url: thumbnailUrl } = uploadToCloudinary;

    const conditions = { _id: id };
    const update = {
      $set: { description: description, title: title, thumbnail: thumbnailUrl },
    };

    const playlistToUpdate = await PlaylistModel.findByIdAndUpdate(
      conditions,
      update,
    );
    console.log(playlistToUpdate);
    res.status(201).send(playlistToUpdate);
  } catch (error) {
    next();
  }
};

const addSongToPlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { songId } = req.body;

  try {
    const conditions = { _id: id, songs: { $ne: songId } };
    const update = { $addToSet: { songs: songId } };
    const playlist = await PlaylistModel.findByIdAndUpdate(
      conditions,
      update,
    ).populate({
      path: "songs",
      select: ["title"],
    });
    res.status(201).send(playlist);
  } catch (error) {
    next();
  }
};

const followPlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    // updating playlist
    const conditions = { _id: id, followers: { $ne: userId } };
    const update = { $addToSet: { followers: userId } };
    const playlist = await PlaylistModel.findByIdAndUpdate(conditions, update);

    // updating user
    const updateUserLikedPlaylists = await UserModel.findByIdAndUpdate(
      { _id: userId, likedPlaylists: { $ne: id } },
      { $addToSet: { likedPlaylists: id } },
    );
    res.status(200).send(playlist);
  } catch (error) {
    next();
  }
};

const removeSongFromPlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { songId } = req.body;

  try {
    const conditions = { _id: id, songs: { $in: songId } };
    const update = { $pull: { songs: songId } };
    const playlist = await PlaylistModel.findByIdAndUpdate(
      conditions,
      update,
    ).populate({
      path: "songs",
      select: ["title"],
    });
    res.status(201).send(playlist);
  } catch (error) {
    next();
  }
};

const deletePlaylist = async (req, res, next) => {
  const { id } = req.params;

  try {
    const playlistToDelete = await PlaylistModel.findByIdAndDelete({ _id: id });
    const updateUserOwnPlaylist = await UserModel.findByIdAndUpdate(
      {
        _id: playlistToDelete.userId.toString(),
      },
      { $pull: { ownPlaylists: id } },
    );
    res.status(204).send({
      success: "Playlist was deleted",
    });
  } catch (error) {
    next();
  }
};

export {
  createPlaylist,
  updatePlaylistInfoById,
  addSongToPlaylist,
  removeSongFromPlaylist,
  getAllPlaylists,
  getPlaylistById,
  deletePlaylist,
  followPlaylist,
};

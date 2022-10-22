import cloudinary from "../../cloudinary.js";
import PlaylistModel from "../models/Playlist.js";
import UserModel from "../models/User.js";

const getAllPlaylists = async (req, res, next) => {
  try {
    const playlists = await PlaylistModel.find();

    res.status(200).send({ playlists });
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
  }
};

const getPlaylistById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const playlist = await PlaylistModel.findById(id)
      .populate({
        path: "songs",
        select: ["title"],
      })
      .lean()
      .exec();

    res.status(200).send({ playlist });
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
  }
};

const createPlaylist = async (req, res, next) => {
  const { title, description, isPrivate, userId } = req.body;
  try {
    const playlist = await PlaylistModel.create({
      title,
      description,
      isPrivate,
      userId,
    });

    const updateUserOwnPlaylist = await UserModel.findByIdAndUpdate(
      {
        _id: userId,
      },
      { $push: { ownPlaylists: playlist._id } },
    );
    res.status(201).send({ playlist });
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
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
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
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
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
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
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
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
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
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
};

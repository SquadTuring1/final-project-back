import SongModel from "../models/Song.js";
import cloudinary from "../../cloudinary.js";
import dotenv from "dotenv";
import GenreModel from "../models/Genre.js";
import UserModel from "../models/User.js";
dotenv.config();

const getAllSongs = async (req, res, next) => {
  try {
    const songs = await SongModel.find({})
      .populate({
        path: "album",
        select: ["title"],
      })
      .populate({
        path: "uploadedBy",
        select: ["username", "firstName", "lastName", "avatar", "email"],
      })
      .populate({
        path: "genre",
        select: ["title"],
      })
      .populate({
        path: "likedBY",
        select: ["username"],
      })
      .lean()
      .exec();
    res.status(200).send({ songs: songs });
  } catch (error) {
    next(error);
  }
};

const getSongById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const song = await SongModel.findByIdAndUpdate({ _id: id });
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
  }
};

const createSong = async (req, res, next) => {
  const {
    title,
    artist,
    fileUrl,
    imageUrl,
    released,
    duration,
    album,
    genre,
    likedBy,
  } = req.body;
  try {
    const newSong = await SongModel.create({
      title,
      artist,
      fileUrl,
      imageUrl,
      released,
      duration,
      album,
      genre,
      likedBy,
    });
    res.status(201).send({ success: "Song was created", createdSong: newSong });
  } catch (error) {
    next(error);
  }
};

const createSongWithCloudinary = async (req, res, next) => {
  const songPath = req.files.video[0].path;
  const thumbnailPath = req.files.image[0].path;
  const title = req.body.title;
  const uploadedBy = req.headers.user;

  try {
    const uploadedSong = await cloudinary.uploader.upload(songPath, {
      folder: "songs",
      resource_type: "video",
    });

    const uploadThummail = await cloudinary.uploader.upload(thumbnailPath, {
      folder: "images",
      resource_type: "image",
    });

    const { url: songUrl, duration, public_id } = uploadedSong;
    const { url: thumbnailUrl } = uploadThummail;

    const newSong = await SongModel.create({
      title: title,
      fileUrl: songUrl,
      thumbnail: thumbnailUrl,
      duration: duration,
      cloudinaryId: public_id,
      uploadedBy,
    });
    res.status(200).send({ newSong });
  } catch (error) {
    res
      .status(500)
      .send({ error: "Something went wrong", errorMsg: error.message });
    next();
  }
};

const updateSong = async (req, res, next) => {
  const { title, released, album, genre } = req.body;
  const { id } = req.params;
  try {
    const songToUpdate = await SongModel.findOneAndUpdate(
      { id: id },
      {
        $set: {
          title,
          released,
          album,
        },
      },
    );
    //  update genre
    const conditions = { title: genre, songs: { $ne: id } };
    const update = {
      $addToSet: { songs: id },
    };
    const updateGenre = await GenreModel.findOneAndUpdate(conditions, update);
    res.status(201).send({
      success: "Song was updated",
    });
  } catch (error) {
    next(error);
  }
};

const deleteSong = async (req, res, next) => {
  const { id } = req.params;

  try {
    const songToDelete = await SongModel.findOneAndDelete({ _id: id });
    res.status(200).send({ success: "Song was deleted" });
  } catch (error) {
    next(error);
  }
};

// Likes

const likeASong = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const conditions = { _id: id, likedBY: { $ne: userId } };
    const update = {
      $addToSet: { likedBY: userId },
    };
    const song = await SongModel.findByIdAndUpdate(conditions, update);
    const user = await UserModel.findByIdAndUpdate(
      { _id: userId, likedSongs: { $ne: id } },
      {
        $addToSet: { likedSongs: id },
      },
    );
    res.status(200).send({ song, user });
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
  }
};

const deleteLike = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.body;
  console.log(id, userId);
  try {
    const conditions = { _id: id, likedBY: { $in: userId } };
    const update = {
      $pull: { likedBY: userId },
    };
    const song = await SongModel.findByIdAndUpdate(conditions, update);
    const user = await UserModel.findByIdAndUpdate(
      { _id: userId, likedSongs: { $in: id } },
      {
        $pull: { likedSongs: id },
      },
    );
    res.status(200).send(song, user);
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
  }
};

const playSong = async (req, res, next) => {
  const { id } = req.params;
  try {
    const songToPlay = await SongModel.findById({ _id: id })
      .populate({
        path: "artist",
        select: ["artistName"],
      })
      .populate({
        path: "album",
        select: ["title"],
      })
      .lean()
      .exec();

    const { title, artist, fileUrl, imgUrl, album } = songToPlay;

    res.status(200).send({
      song: {
        title,
        artist,
        fileUrl,
        imgUrl,
        album,
      },
    });
  } catch (error) {
    res.status(500).send({
      error: "Something went wrong",
      errorMsg: error.message,
    });
  }
};

const SongControllerActions = {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
  createSongWithCloudinary,
  likeASong,
  deleteLike,
  playSong,
};

export default SongControllerActions;

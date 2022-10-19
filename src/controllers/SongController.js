import SongModel from "../models/Song.js";
import cloudinary from "../../cloudinary.js";
import dotenv from "dotenv";

dotenv.config();

// const createSong = async (req, res, next) => {
//   const {
//     title,
//     fileUrl,
//     thumbnail,
//     released,
//     duration,
//     album,
//     genre,
//     likedBy,
//   } = req.body;
//   try {
//     const newSong = await SongModel.create({
//       title,
//       fileUrl,
//       thumbnail,
//       released,
//       duration,
//       album,
//       genre,
//       likedBy,
//     });
//     res.status(201).send({ success: "Song was created", createdSong: newSong });
//   } catch (error) {
//     next(error);
//   }
// };

export const createSongWithCloudinary = async (req, res, next) => {
  const songPath = req.files.video[0].path;
  const thumbnailPath = req.files.image[0].path;
  const title = req.body.title;

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
    });

    res.status(200).send({ newSong });
  } catch (error) {
    console.log("something went wrong");
    next();
  }
};

const getAllSongs = async (req, res, next) => {
  try {
    const songs = await SongModel.find({});
    res.status(200).send({ songs: songs });
  } catch (error) {
    next(error);
  }
};

const updateSong = async (req, res, next) => {
  const {
    title,
    fileUrl,
    thumbnail,
    released,
    duration,
    album,
    genre,
    likedBy,
  } = req.body;
  const { id } = req.params;
  try {
    const songToUpdate = await SongModel.findOneAndUpdate(
      { id: id },
      {
        $set: {
          title,
          fileUrl,
          thumbnail,
          released,
          duration,
          album,
          genre,
          likedBy,
        },
      },
    );
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

const SongControllerActions = {
  getAllSongs,
  createSong,
  updateSong,
  deleteSong,
  createSongWithCloudinary,
};

export default SongControllerActions;

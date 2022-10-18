import SongModel from "../models/Song.js";
import { upload } from "../../cloudinary.js";
import multer from "multer";
import cloudinary from "../../cloudinary.js";

import dotenv from "dotenv";

dotenv.config();

const getAllSongs = async (req, res, next) => {
  try {
    const songs = await SongModel.find({});
    res.status(200).send({ songs: songs });
  } catch (error) {
    next(error);
  }
};

const createSong = async (req, res, next) => {
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
  try {
    const newSong = await SongModel.create({
      title,
      fileUrl,
      thumbnail,
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

const uploadCloudinary = async (req, res, next) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "wfqjvb4s",
    });
    console.log(uploadResponse);
    res.send({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ err: "Something went wrong" });
  }
};

const uploadCloudinary2 = async (req, res, next) => {
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      const fileExt = file.originalname.split(".").pop();
      const filename = `${new Date().getTime()}.${fileExt}`;
      cb(null, filename);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
      cb(null, true);
    } else {
      cb(
        {
          message: "Unsupported File Format",
        },
        false,
      );
    }
  };

  const upload = multer({
    storage,
    limits: {
      fieldNameSize: 200,
      fileSize: 5 * 1024 * 1024,
    },
    fileFilter,
  }).single("audio");

  upload(req, res, (err) => {
    if (err) {
      return res.send(err);
    }

    // SEND FILE TO CLOUDINARY
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const { path } = req.file; // file becomes available in req at this point

    const fName = req.file.originalname.split(".")[0];
    cloudinary.uploader.upload(
      path,
      {
        resource_type: "raw",
        public_id: `AudioUploads/${fName}`,
      },

      // Send cloudinary response or catch error
      (err, audio) => {
        if (err) return res.send(err);

        fs.unlinkSync(path);
        res.send(audio);
      },
    );
  });
};

const SongControllerActions = {
  getAllSongs,
  createSong,
  updateSong,
  deleteSong,
  uploadCloudinary,
};

export default SongControllerActions;

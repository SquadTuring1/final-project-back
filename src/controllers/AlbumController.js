import { AlbumModel } from "../models/index.js";

const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await AlbumModel.find({});
    res.status(200).send({
      albums: albums,
    });
  } catch (error) {
    next(error);
  }
};

const createAlbum = async (req, res, next) => {
  const { title, year, thumbnail, totalTracks } = req.body;
  try {
    const newAlbum = await AlbumModel.create({
      title,
      year,
      thumbnail,
      totalTracks,
    });
    res.status(201).send({
      success: "Album created!",
      album: newAlbum,
    });
  } catch (error) {
    next(error);
  }
};

export { getAllAlbums, createAlbum };

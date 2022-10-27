import PlaylistModel from "../models/Playlist.js";
import SongModel from "../models/Song.js";

const search = async (req, res, next) => {
  const { query } = req.body;

  try {
    const songs = await SongModel.find({
      title: { $regex: query, $options: "i" },
      // artist: { $regex: query, $options: "i" }, uncomment when Artist model is deleted and artist in Song is a string
    });

    const playlists = await PlaylistModel.find({
      title: { $regex: query, $options: "i" },
    });

    res.status(200).send({ songs, playlists });
  } catch (error) {
    next();
  }
};

export default search;

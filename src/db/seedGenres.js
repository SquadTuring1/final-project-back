import mongoose from "mongoose";
import GenreModel from "../models/Genre.js";
import SongModel from "../models/Song.js";

const genres = [
  "Pop",
  "Rock",
  "Hip Hop",
  "Kpop",
  "Jazz",
  "Country",
  "R&B",
  "Electronic",
  "Metal",
  "Classical",
  "Dance",
  "Alternative",
  "Reggae",
  "Indie",
  "Soul",
  "Punk",
  "Latin",
];

const populateDocs = genres.map((genre) => ({
  title: genre,
  imgUrl:
    "https://previews.123rf.com/images/zzooby/zzooby1604/zzooby160400023/55285446-music-styles-typographic-vintage-poster.jpg",
  song: [],
}));

const seedGenres = async () => {
  await GenreModel.insertMany(populateDocs);
};

const updateGenresSongs = async () => {
  try {
    const genres = await GenreModel.find({});
    genres.map(async (gener) => {
      const songs = await SongModel.find({});

      const songsByGenre = songs.filter((song) => {
        return song.genre._id.toString() == gener.id ? song.id : null;
      });

      songsByGenre.map(async (song) => {
        await GenreModel.findByIdAndUpdate(
          { _id: gener.id, songs: { $ne: song.id } },
          { $addToSet: { songs: song.id } },
        );
      });
    });
  } catch (error) {
    console.log(err.message);
  }
};

export { seedGenres, updateGenresSongs };

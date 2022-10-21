import mongoose from "mongoose";
import GenreModel from "../models/Genre.js";

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
  song: [
    { _id: "634eaa6e1ea05a88f2ab7974" },
    { _id: "634fd4f6d2e04100b977f2df" },
    { _id: "634fd561d2e04100b977f2e5" },
  ],
}));

const addGenres = async () => {
  await GenreModel.insertMany(populateDocs);
};

export default addGenres;

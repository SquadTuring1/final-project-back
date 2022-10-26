import PlaylistModel from "../models/Playlist.js";
import SongModel from "../models/Song.js";
import UserModel from "../models/User.js";

const sampleHandler = (array, amount) => {
  return array
    .map((item) => ({ item, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map((obj) => obj.item)
    .slice(0, amount);
};

const seedPlaylist = async () => {
  const songs = await SongModel.find({});
  const users = await UserModel.find({});
  const sampledSongs = sampleHandler(songs, 20);
  const sampledUsers = sampleHandler(users, 4);

  const playlist1 = await PlaylistModel.create({
    title: "Mix - a little bit of everthing",
    description:
      "A mix of songs of what we have to offer, just sit back and relax, or rock on",
    thumbnail:
      "https://pro2-bar-s3-cdn-cf4.myportfolio.com/dbea3cc43adf643e2aac2f1cbb9ed2f0/f14d6fc4-2cea-41a2-9724-a7e5dff027e8_rw_1200.jpg?h=60e8fb45f75e1a2612c53a4f2174997c",
    isPrivate: false,
    songs: sampledSongs,
    followers: sampledUsers,
  });

  const playlist2 = await PlaylistModel.create({
    title: "HOT",
    description: "Listen to what's popular in spain right now",
    thumbnail:
      "https://i.scdn.co/image/ab67706c0000bebb3bd5501a335b265807df34db",
    isPrivate: false,
    songs: sampledSongs,
    followers: sampledUsers,
  });
};

export default seedPlaylist;

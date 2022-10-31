//Account:
import { signup, updateAccout } from "./AccountController.js";

//Personal:
import {
  followSomeone,
  getMyFollowers,
  getMyFollowing,
  getMyLikedSongs,
  getMyOwnSongs,
} from "./PersonalController.js";

//Song:
import {
  getAllSongs,
  getSongById,
  getSongsByUserId,
  updateSong,
  deleteSong,
  createSongWithCloudinary,
  likeASong,
  deleteLike,
  playSong,
  getMostLikedSongs,
} from "./SongController.js";

//Album:
import { getAllAlbums, createAlbum } from "./AlbumController.js";

//Playlist
import {
  createPlaylist,
  updatePlaylistInfoById,
  addSongToPlaylist,
  removeSongFromPlaylist,
  getAllPlaylists,
  getPlaylistById,
  deletePlaylist,
  followPlaylist,
} from "./PlaylistController.js";

//Genre
import { getAllGenres, getGenreById } from "./GenreController.js";

//Search
import search from "./SeachController.js";

//User - for future use
import {
  getAllUsers,
  updateCurrentUser,
  getCurrentUser,
  deleteUser,
} from "./UserController.js";

export {
  signup,
  updateAccout,
  followSomeone,
  getMyFollowers,
  getMyFollowing,
  getMyLikedSongs,
  getMyOwnSongs,
  getAllSongs,
  getSongById,
  getSongsByUserId,
  updateSong,
  deleteSong,
  createSongWithCloudinary,
  likeASong,
  deleteLike,
  playSong,
  getMostLikedSongs,
  getAllAlbums,
  createAlbum,
  getAllGenres,
  getGenreById,
  createPlaylist,
  updatePlaylistInfoById,
  addSongToPlaylist,
  removeSongFromPlaylist,
  getAllPlaylists,
  getPlaylistById,
  deletePlaylist,
  followPlaylist,
  search,
  getAllUsers,
  updateCurrentUser,
  getCurrentUser,
  deleteUser,
};

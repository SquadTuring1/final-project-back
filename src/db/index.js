import connectDB from "./connect.js";
import seedAlbums from "./seedAlbums.js";
import { seedGenres, updateGenresSongs } from "./seedGenres.js";
import seedPlaylist from "./seedPlaylists.js";
import seedSongs from "./seedSongs.js";
import seedUsers from "./seedUsers.js";

export {
  connectDB,
  seedAlbums,
  seedGenres,
  updateGenresSongs,
  seedPlaylist,
  seedSongs,
  seedUsers,
};

import app from "./server.js";
import connectDB from "./db/connect.js";
import CONFIG from "./config/config.js";
import swaggerDocs from "./middleware/swagger/swagger.js";

import { addGenres, updateGenresSongs } from "./db/seedGenres.js";
import seedAlbums from "./db/albumSeed.js";
import seedSongs from "./db/songSeed.js";
import seedPlaylist from "./db/seedPlaylists.js";
import seedUsers from "./db/seedUsers.js";

connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("DB CONNECTED");
  // addGenres();
  // seedAlbums();
  // seedSongs();
  // updateGenresSongs();
  // seedPlaylist();
  // seedUsers();
  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`,
    );
  });
  swaggerDocs(app, 4000);
});

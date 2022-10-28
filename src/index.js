import app from "./server.js";
import CONFIG from "./config/config.js";
import swaggerDocs from "./middleware/swagger/swagger.js";
import {
  connectDB,
  seedAlbums,
  seedGenres,
  updateGenresSongs,
  seedPlaylist,
  seedSongs,
  seedUsers,
} from "./db/index.js";

connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("DB CONNECTED");

  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`,
    );
  });
  swaggerDocs(app, 4000);
});

/*
Seeding to DB:

In case you need to seed information to your DB, find below the the follwoing helpers functions, make sure to run them in this order inside the onServerInit function

  addGenres();
  seedAlbums();
  seedSongs();
  updateGenresSongs();
  seedPlaylist();
  seedUsers();

*/

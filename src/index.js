import app from "./server.js";
import connectDB from "./db/connect.js";
import CONFIG from "./config/config.js";
import swaggerDocs from "./middleware/swagger/swagger.js";

import addGenres from "../src/db/seed.js";
import seedAlbums from "./db/albumSeed.js";
import seedSongs from "./db/songSeed.js";

connectDB().then(async function onServerInit() {
  CONFIG.development.logger.info("DB CONNECTED");
  // addGenres();
  // seedAlbums();
  // seedSongs();
  app.listen(CONFIG.development.app.PORT, () => {
    CONFIG.development.logger.info(
      `Server running at http://localhost:${CONFIG.development.app.PORT}`,
    );
  });
  swaggerDocs(app, 4000);
});

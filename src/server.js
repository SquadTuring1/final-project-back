import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import AccountRouter from "./routes/account-routes.js";
import UserRouter from "./routes/UserRouter.js";
<<<<<<< HEAD
import SongRouter from "./routes/SongRouter.js"
import ArtistRouter from "./routes/ArtistRouter.js";
import AlbumRouter from "./routes/AlbumRouter.js";
=======
import SongRouter from "./routes/SongRouter.js";
import bodyParser from "body-parser";

const { json } = bodyParser;
>>>>>>> test-cloudinary

const app = express();

app.use(morgan("dev"));
app.use(helmet());
// helmet({
//   crossOriginResourcePolicy: false,
// });
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(
  json({
    limit: "50mb",
  }),
);
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Routers
app.use(UserRouter);
app.use(AccountRouter);
<<<<<<< HEAD
app.use(SongRouter)
app.use(ArtistRouter)
app.use(AlbumRouter)
=======
app.use(SongRouter);
>>>>>>> test-cloudinary

export default app;

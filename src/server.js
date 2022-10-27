import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import AccountRouter from "./routes/account-routes.js";
import GenreRouter from "./routes/GenreRouter.js";
import UserRouter from "./routes/UserRouter.js";
import SongRouter from "./routes/SongRouter.js";
import PlaylistRouter from "./routes/PlaylistRouter.js";
// import ArtistRouter from "./routes/ArtistRouter.js";
// import AlbumRouter from "./routes/AlbumRouter.js";
import PersonalRouter from "./routes/PersonalRouter.js";
import SearchRouter from "./routes/SearchRouter.js";
import bodyParser from "body-parser";
import ErrorHandler from "./middleware/errorHandler.js";
import paginate from "express-paginate";
const { json } = bodyParser;

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(
  json({
    limit: "50mb",
  }),
);
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Pagination Middleware
app.use(paginate.middleware(10, 50));

// Routers
app.use(UserRouter);
app.use(AccountRouter);
app.use(SongRouter);
// app.use(AlbumRouter);
app.use(GenreRouter);
app.use(PlaylistRouter);
app.use(PersonalRouter);
app.use(SearchRouter);

// Error Middleware
app.use(ErrorHandler);
export default app;

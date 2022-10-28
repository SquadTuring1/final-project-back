import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import {
  AccountRouter,
  AlbumRouter,
  PlaylistRouter,
  PersonalRouter,
  SearchRouter,
  SongRouter,
  UserRouter,
  GenreRouter,
} from "./routes/index.js";
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
app.use(GenreRouter);
app.use(PlaylistRouter);
app.use(PersonalRouter);
app.use(SearchRouter);
app.use(AlbumRouter);

// Error Middleware
app.use(ErrorHandler);

export default app;

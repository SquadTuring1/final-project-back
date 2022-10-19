import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import AccountRouter from "./routes/account-routes.js";
import UserRouter from "./routes/UserRouter.js";
import SongRouter from "./routes/SongRouter.js"
import ArtistRouter from "./routes/ArtistRouter.js";
import AlbumRouter from "./routes/AlbumRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routers
app.use(UserRouter);
app.use(AccountRouter);
app.use(SongRouter)
app.use(ArtistRouter)
app.use(AlbumRouter)

export default app;

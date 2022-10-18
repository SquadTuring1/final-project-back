import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import AccountRouter from "./routes/account-routes.js";
import UserRouter from "./routes/UserRouter.js";
import SongRouter from "./routes/SongRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb", extended: true }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }),
);

// Routers
app.use(UserRouter);
app.use(AccountRouter);
app.use(SongRouter);

export default app;

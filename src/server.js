import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import AccountRouter from "./routes/account-routes.js";

const app = express()

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(AccountRouter)

export default app
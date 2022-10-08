import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));

export default app;

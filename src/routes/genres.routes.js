import express from "express";
import { getAllGenres, getGenreById } from "../controllers/index.js";

const Router = express.Router;

const GenreRouter = Router();

GenreRouter.get("/genres", getAllGenres);
GenreRouter.get("/genres/:id", getGenreById);

export default GenreRouter;

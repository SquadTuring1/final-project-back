import express from "express";
import { search } from "../controllers/index.js";

const Router = express.Router;

const SearchRouter = Router();

SearchRouter.post("/search", search);

export default SearchRouter;

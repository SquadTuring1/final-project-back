import express from "express";
import search from "../controllers/SeachController.js";

const Router = express.Router;

const SearchRouter = Router();

SearchRouter.post("/search", search);

export default SearchRouter;

import express from "express";
import { getAllAlbums, createAlbum } from "../controllers/index.js";

const Router = express.Router;

const AlbumRouter = Router();

AlbumRouter.get("/albums", getAllAlbums);
AlbumRouter.post("/albums", createAlbum);

export default AlbumRouter;

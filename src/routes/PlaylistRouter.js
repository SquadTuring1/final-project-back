import express from "express";
import { upload } from "../../cloudinary.js";
import {
  createPlaylist,
  updatePlaylistInfoById,
  addSongToPlaylist,
  getAllPlaylists,
  getPlaylistById,
} from "../controllers/PlaylistController.js";

const Router = express.Router;

const PlaylistRouter = Router();

PlaylistRouter.get("/playlists", getAllPlaylists);
PlaylistRouter.get("/playlists/:id", getPlaylistById);
PlaylistRouter.post("/playlists", createPlaylist);
PlaylistRouter.patch(
  "/playlists/:id",
  upload.single("thumbnail"),
  updatePlaylistInfoById,
);
PlaylistRouter.patch("/playlists/:id/addsong", addSongToPlaylist);
PlaylistRouter.delete("/playlists/:id");

export default PlaylistRouter;
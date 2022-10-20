import express from "express";
import { upload } from "../../cloudinary.js";
// import upload from "../../multer.js";
import SongControllerActions from "../controllers/SongController.js";

const Router = express.Router;

const SongRouter = Router();

const {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
  createSongWithCloudinary,
  likeASong,
  deleteLike,
  playSong,
} = SongControllerActions;

SongRouter.get("/api/songs", getAllSongs);
SongRouter.get("/api/songs/:id", getSongById);
SongRouter.post("/api/songs", createSong);
SongRouter.put("/api/songs/:id", updateSong);
SongRouter.delete("/api/songs/:id", deleteSong);

SongRouter.post(
  "/api/addsong",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
    { name: "title", maxCount: 1 },
  ]),
  createSongWithCloudinary,

  // like routes
  SongRouter.post("/api/songs/:id/like", likeASong),
  SongRouter.delete("/api/songs/:id/like", deleteLike),

  // play song
  SongRouter.get("/api/songs/:id/play", playSong),
);

export default SongRouter;

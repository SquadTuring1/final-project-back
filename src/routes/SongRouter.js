import express from "express";
import { upload } from "../../cloudinary.js";
// import upload from "../../multer.js";
import SongControllerActions from "../controllers/SongController.js";
import authMiddleware from "../middleware/Auth.js";

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

SongRouter.get("/songs", getAllSongs);
SongRouter.get("/songs/:id", getSongById);
SongRouter.put("/songs/:id", updateSong);
SongRouter.delete("/songs/:id", deleteSong);

SongRouter.post(
  "/addsong",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
    { name: "title", maxCount: 1 },
  ]),
  createSongWithCloudinary,

  // like routes
  SongRouter.post("/songs/:id/like", likeASong),
  SongRouter.delete("/songs/:id/like", deleteLike),

  // play song
  SongRouter.get("/songs/:id/play", playSong),
);

export default SongRouter;

import express from "express";
import { upload } from "../utils/cloudinary.js";
import {
  getAllSongs,
  getSongById,
  getSongsByUserId,
  updateSong,
  deleteSong,
  createSongWithCloudinary,
  likeASong,
  deleteLike,
  playSong,
  getMostLikedSongs,
} from "../controllers/index.js";
import authMiddleware from "../middleware/Auth.js";

const Router = express.Router;

const SongRouter = Router();

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
  SongRouter.get("/mostliked", getMostLikedSongs),

  // play song
  SongRouter.get("/songs/:id/play", playSong),


  // get own songs by user
  SongRouter.get('/songs/:id/user', getSongsByUserId),

);


export default SongRouter;

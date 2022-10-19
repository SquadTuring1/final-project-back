import express from "express";
import { upload } from "../../cloudinary.js";
// import upload from "../../multer.js";
import SongControllerActions from "../controllers/SongController.js";

const Router = express.Router;

const SongRouter = Router();

const {
  getAllSongs,
  createSong,
  updateSong,
  deleteSong,
  createSongWithCloudinary,
} = SongControllerActions;
SongRouter.get("/songs", getAllSongs);
SongRouter.post("/songs", createSong);
SongRouter.put("/songs/:id", updateSong);
SongRouter.delete("/songs/:id", deleteSong);

SongRouter.post(
  "/api/addsong",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
    { name: "title", maxCount: 1 },
  ]),
  createSongWithCloudinary,
);

// SongRouter.get("/songs/:id", getSong)
// SongRouter.get("/songs/:id", getSong)
// SongRouter.get("/songs/:id", getSong)

export default SongRouter;

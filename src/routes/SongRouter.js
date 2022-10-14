import express from "express";
import SongControllerActions from "../controllers/SongController.js";


const Router = express.Router

const SongRouter = Router()

const { getAllSongs, createSong, updateSong, deleteSong} = SongControllerActions
SongRouter.get("/songs", getAllSongs)
SongRouter.post("/songs", createSong)
SongRouter.put("/songs/:id",updateSong)
SongRouter.delete("/songs/:id", deleteSong)

// SongRouter.get("/songs/:id", getSong)
// SongRouter.get("/songs/:id", getSong)
// SongRouter.get("/songs/:id", getSong)

export default SongRouter

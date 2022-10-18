import express from "express";
import { getAllArtists,createArtist } from "../controllers/ArtistController.js";

const Router = express.Router

const ArtistRouter = Router()

ArtistRouter.get("/artists", getAllArtists)
ArtistRouter.post("/artists", createArtist)

export default ArtistRouter
import express from "express";
import {
  followSomeone,
  getMyFollowers,
  getMyFollowing,
  getMyLikedSongs,
  getMyOwnSongs,
} from "../controllers/index.js";

const Router = express.Router;

const PersonalRouter = Router();

PersonalRouter.patch("/me/:id/follow", followSomeone);
PersonalRouter.get("/me/:id/followers", getMyFollowers);
PersonalRouter.get("/me/:id/following", getMyFollowing);
PersonalRouter.get("/me/:id/songs", getMyLikedSongs);
PersonalRouter.get("/me/:id/own", getMyOwnSongs);

export default PersonalRouter;

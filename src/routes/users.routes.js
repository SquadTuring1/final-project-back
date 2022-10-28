import express from "express";
import {
  getAllUsers,
  updateCurrentUser,
  getCurrentUser,
  deleteUser,
} from "../controllers/index.js";

const Router = express.Router;

const UserRouter = Router();

UserRouter.get("/users", getAllUsers);
UserRouter.patch("/users/:uid", updateCurrentUser);
UserRouter.get("/users/:uid", getCurrentUser);
UserRouter.delete("/users/:id", deleteUser);

export default UserRouter;

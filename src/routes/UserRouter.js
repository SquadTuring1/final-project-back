import express from "express";
import UserControllerActions from "../controllers/UserController.js";

const Router = express.Router;

const UserRouter = Router();

UserRouter.get("/api/users", UserControllerActions.getAllUsers);
UserRouter.patch("/api/users/:id", UserControllerActions.updateCurrentUser);

export default UserRouter;

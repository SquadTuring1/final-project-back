import express from "express";
import UserControllerActions from "../controllers/UserController.js";

const Router = express.Router;

const UserRouter = Router();

UserRouter.get("/users", UserControllerActions.getAllUsers);
UserRouter.patch("/users/:uid", UserControllerActions.updateCurrentUser);
UserRouter.get("/users/:uid", UserControllerActions.getCurrentUser);
UserRouter.delete("/users/:id", UserControllerActions.deleteUser);

export default UserRouter;

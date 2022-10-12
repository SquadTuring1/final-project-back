import express from "express";
import UserControllerActions from "../controllers/UserController.js";

const Router = express.Router;

const UserRouter = Router();

UserRouter.get("/api/users", UserControllerActions.getAllUsers);
UserRouter.patch("/api/users/:id", UserControllerActions.updateCurrentUser);
UserRouter.get("/api/users/:uid", UserControllerActions.getCurrnetUser);
UserRouter.delete("/api/users/:id", UserControllerActions.deleteUser);

export default UserRouter;

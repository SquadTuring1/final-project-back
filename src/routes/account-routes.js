import express from "express";
import { login, signup} from "../controllers/user-controller.js"

const Router = express.Router;

const AccountRouter = Router();

console.log("hello")
AccountRouter.post("/login", login);
AccountRouter.post("/signup", signup);
// AccountRouter.post("/change-password", changePassword);

// console.log(AccountRouter)

// AccountRouter.get("/account", getAccount)
// AccountRouter.post("/account", saveAccount)

export default AccountRouter
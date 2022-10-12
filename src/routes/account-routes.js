import express from "express";
import { login, signup} from "../controllers/AccountController.js"

const Router = express.Router;

const AccountRouter = Router();

AccountRouter.post("/login", login);
AccountRouter.post("/signup", signup);
// AccountRouter.post("/change-password", changePassword);

// console.log(AccountRouter)

// AccountRouter.get("/account", getAccount)
// AccountRouter.post("/account", saveAccount)

export default AccountRouter
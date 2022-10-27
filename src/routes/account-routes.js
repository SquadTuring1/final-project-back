import express from "express";
import { upload } from "../../cloudinary.js";
import { signup, updateAccout } from "../controllers/AccountController.js";

const Router = express.Router;

const AccountRouter = Router();

AccountRouter.patch("/update", upload.single("image"), updateAccout);
AccountRouter.post("/signup", signup);

export default AccountRouter;

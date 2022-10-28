import express from "express";
import { upload } from "../utils/cloudinary.js";
import { signup, updateAccout } from "../controllers/index.js";

const Router = express.Router;

const AccountRouter = Router();

AccountRouter.patch("/update", upload.single("image"), updateAccout);
AccountRouter.post("/signup", signup);

export default AccountRouter;

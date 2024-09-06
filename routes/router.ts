import { Router } from "express";
import { postUserInfo, login } from "../controllers/authController";


import { authMiddleware } from "../middlewares/auth";
import sessionRouter from "./sessionRouter";
import booksessionRouter from "./booksessionRouter";


const router = Router();

router.post("/signup", postUserInfo);
router.post("/login", login);


router.use("/",authMiddleware, sessionRouter);
router.use("/",authMiddleware,booksessionRouter);

export default router;
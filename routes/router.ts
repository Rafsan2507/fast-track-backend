import { Router } from "express";
import { postUserInfo, login } from "../controllers/authController";


import { authMiddleware } from "../middlewares/auth";


const router = Router();

router.post("/signup", postUserInfo);
router.post("/login", login);

export default router;
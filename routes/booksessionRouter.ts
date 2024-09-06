import { Router } from "express";
import { getUserProfile } from "../controllers/booksessionController";

const booksessionRouter = Router();

booksessionRouter.get("/dashboard/profile/:id",getUserProfile);

export default booksessionRouter;
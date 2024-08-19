import { Router } from "express";
import { getSessions, postSession } from "../controllers/sessionController";


const sessionRouter = Router();

sessionRouter.post("/dashboard/interviewdashboard/addsession",postSession);
sessionRouter.get("/dashboard/interviewdashboard/sessionlist",getSessions);

export default sessionRouter;
import { Router } from "express";
import { getSessions, getUsersWithSessions, postSession } from "../controllers/sessionController";


const sessionRouter = Router();

sessionRouter.post("/dashboard/interviewdashboard/addsession",postSession);
sessionRouter.get("/dashboard/interviewdashboard/sessionlist",getSessions);

sessionRouter.get("/dashboard/interviewdashboard/allusersessions",getUsersWithSessions);

export default sessionRouter;
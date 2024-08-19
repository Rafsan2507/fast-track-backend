import { Request, Response } from "express";
import { ExtendedRequest } from "../src/express";
import { createSessions, getSessionsByUserId } from "../models/SessionModel/sessionQuery";

export async function postSession(req: ExtendedRequest, res: Response) {
  try {
    const userId = (req.user as any).id;
    const { timezone, startTime } = req.body;

    if (!timezone || !Array.isArray(startTime) || startTime.length === 0) {
      return res.status(400).json({ error: "timezone and an array of startTimes are required" });
    }

    const newSessions = await createSessions(userId, timezone, startTime);

    return res.status(201).json(newSessions);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create sessions", details: error });
  }
}

export async function getSessions(req: ExtendedRequest, res: Response) {
    try {
      const userId = (req.user as any).id;
  
      const sessions = await getSessionsByUserId(userId);
      return res.status(200).json(sessions);
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve sessions", details: error });
    }
  }
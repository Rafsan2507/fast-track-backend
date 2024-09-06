import { Request, Response } from "express";
import { ExtendedRequest } from "../src/express";
import { getUserProfilewithSessions } from "../models/BookModel/booksessionQuery";

export async function getUserProfile(req: ExtendedRequest, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
  
      const userProfile = await getUserProfilewithSessions(id);
  
      return res.status(200).json(userProfile);
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve users with sessions" });
    }
  }
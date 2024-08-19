import { UserInstance } from "../models/UserModel/userModel";
import { Request } from "express";

export interface ExtendedRequest extends Request {
  user?: UserInstance;
}
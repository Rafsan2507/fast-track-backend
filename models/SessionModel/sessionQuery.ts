import { Op } from "sequelize";
import Session from "../SessionModel/sessionModel";
import User from "../UserModel/userModel";

export async function createSessions(userId: number, timezone: string, startTimes: string[]) {
  try {
    const sessionPromises = startTimes.map((startTime) => 
      Session.create({
        userId,
        timezone,
        startTime,
      })
    );

    const newSessions = await Promise.all(sessionPromises);
    return newSessions;
  } catch (error) {
    throw new Error("Failed to create sessions: " + error);
  }
}

export async function getSessionsByUserId(userId: number) {
    try {
      const sessions = await Session.findAll({
        where: { userId },
        attributes: ["id", "timezone", "startTime"],
      });
  
      return sessions;
    } catch (error) {
      throw new Error("Failed to retrieve sessions: " + error);
    }
  }
  export async function getAllUsersWithSessions(id: number) {
    try {
      const usersWithSessions = await User.findAll({
        where: {
          id: {
            [Op.ne]: id,
          },
        },
        attributes: ["id", "firstname", "lastname", "email", "phone"],
        include: [
          {
            model: Session,
            as: "UserId",
            attributes: ["id", "userId", "timezone", "startTime"],
          },
        ],
      });
  
      return usersWithSessions;
    } catch (error) {
      throw new Error("Failed to retrieve users with sessions: " + error);
    }
  }


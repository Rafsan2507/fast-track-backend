import Session from "../SessionModel/sessionModel";
import User from "../UserModel/userModel";


export async function getUserProfilewithSessions(id: number) {
    try {
      const usersWithSessions = await User.findAll({
        where: { id },
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
  
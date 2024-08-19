import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import User from "../UserModel/userModel";

interface SessionAttributes {
  id: number;
  userId: number;
  timezone: string;
  startTime: string;
}

export interface SessionCreationAttributes
  extends Optional<SessionAttributes, "id"> {}

export interface SessionInstance
  extends Model<SessionAttributes, SessionCreationAttributes>,
  SessionAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Session = sequelize.define<SessionInstance>("sessions", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'id',
      },
  },

  timezone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Session;

import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../index";
import Session from "../SessionModel/sessionModel";

interface UserAttributes {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Session, { foreignKey: "userId", as: "UserId" });

export default User;

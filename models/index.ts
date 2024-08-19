import { Sequelize } from "sequelize";
import config from "../config/db";

const sequelize = new Sequelize(config.DB_URI);

export default sequelize;
import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
import { Request, Response } from "express";
import config from "../config/db";
import sequelize from "../models";
import router from "../routes/router";
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  exposedHeaders: ["authorization"],
};



const app: Express = express();

const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the backend",
  });
});


app.listen(config.PORT, async () => {
    await sequelize.sync();
    console.log(`Server is running on http://localhost:${config.PORT}`);
  });
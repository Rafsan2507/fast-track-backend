import { Request, Response } from "express";
import {
  addUser,
  findUserbyEmail,
} from "../models/UserModel/userQuery";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "lalala this isnt secure";

export async function postUserInfo(req: Request, res: Response) {
  try {
    const { firstname, lastname, phone, email, password} =
      req.body;
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    if (
      firstname &&
      lastname &&
      email &&
      phone &&
      password &&
      
      typeof firstname === "string" &&
      typeof lastname === "string" &&
      typeof email === "string" &&
      typeof phone === "number" &&
      typeof password === "string"
    ) {
      const newUser = await addUser({
        firstname,
        lastname,
        email,
        phone,
        password: hash
      });
      const accessToken = jwt.sign({ id: newUser.id }, SECRET_KEY);
      res.cookie("authorization", accessToken);
      res.status(201).send({ accessToken });
    }
    else{
      res.send("went wrong");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error, message: "Could not create user" });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await findUserbyEmail(email);
    const validatedPass = await bcrypt.compare(password, user?.password);
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ id: user?.id }, SECRET_KEY);
    res.status(200).send({ accessToken });
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
}


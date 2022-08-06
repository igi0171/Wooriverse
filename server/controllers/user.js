import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(404)
        .json({ message: "This account doesn't exist. Please sign up" });

    const isPasswordCorrect = await bcrypt.compare(password, user.hash);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    res.status(200).json({ result: user, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, name, nickname } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ message: "An account with this email already exists" });

    const hash = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      hash,
      name,
      nickname,
    });

    const payload = {
      id: result._id,
      email: result.email,
    };

    const token = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
    });

    console.log("created user: ", result);
    res
      .status(201)
      .json({ status: "ok", message: "user created", result, token });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Something went wrong" });

    console.log(error);
  }
};

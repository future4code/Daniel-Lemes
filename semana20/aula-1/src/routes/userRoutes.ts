import express from "express";
import createUser from "../controller/user/createUser";
import login from "../controller/user/login";
import getUserById from "../controller/user/getUserById";
import editUser from "../controller/user/editUser";

export const userRouter = express.Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", login);
userRouter.post("/edit", editUser);
userRouter.get("/:id", getUserById);
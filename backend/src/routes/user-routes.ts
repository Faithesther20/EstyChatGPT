import { Router } from "express";
import { getAllUsers, userSignUp } from "../controllers/user-controllers.js";
import { signupValidator, validate } from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signUp", validate(signupValidator) , userSignUp);

export default userRoutes;
import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generatedChatCompletion } from "../controllers/chat-controllers.js";

//Protected Api
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator),verifyToken,generatedChatCompletion);

export default chatRoutes;
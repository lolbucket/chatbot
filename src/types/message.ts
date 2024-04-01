import { Role } from "../enums/role";
import { CategoryMessage } from "./category-message";

export type UserMessage = {
  content: React.ReactNode;
  sender: typeof Role.USER;
};

export type BotMessage = {
  content: React.ReactNode;
  sender: typeof Role.BOT;
  similarQuestions?: CategoryMessage[];
};

export type Message = UserMessage | BotMessage;

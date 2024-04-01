import { MessageCategory } from "../enums/message-category";
import { ValueOf } from "./value-of";

export type CategoryMessage = {
  message: string;
  response: string;
  keywords: string[];
  category: ValueOf<typeof MessageCategory>;
};

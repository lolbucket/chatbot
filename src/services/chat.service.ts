import Fuse, { IFuseOptions } from "fuse.js";
import { allCategories } from "../data/allCategories";
import { CategoryMessage } from "../types/category-message";
import { BotMessage } from "../types/message";
import { Role } from "../enums/role";

const BOT_FALLBACK_MESSAGE =
  'Розпишіть детальніше або ви можете знайти інформацію на нашому головному сайті.<a href="https://www.kspu.edu/">KSU</a>';

class ChatService {
  private readonly allCategories = allCategories;
  private readonly fuse: Fuse<CategoryMessage>;

  public constructor() {
    const options: IFuseOptions<CategoryMessage> = {
      keys: ["message", "keywords"],
    };
    this.fuse = new Fuse(this.allCategories, options);
  }

  public getBotResponse(message: string): BotMessage {
    const searchResult = this.fuse.search(message);

    if (searchResult.length > 0) {
      const questions = searchResult.map((result) => result.item);

      return {
        sender: Role.BOT,
        content: questions[0].response,
        similarQuestions: questions.slice(1, 3),
      };
    }

    return {
      sender: Role.BOT,
      content: BOT_FALLBACK_MESSAGE,
    };
  }
}

const chatService = new ChatService();
export default chatService;

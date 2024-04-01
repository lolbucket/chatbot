import { Role } from "../../enums/role";
import { Message } from "../../types/message";
import { cn } from "../../utils/cn";

type MessageBoxProps = {
  sender?: Message["sender"];
  children?: React.ReactNode;
};

const MessageBox = ({ sender = Role.BOT, children }: MessageBoxProps) => {
  return (
    <div
      className={cn(
        "message-box shadow border border-zinc-200 py-2 px-3 w-fit max-w-80 rounded break-words",
        sender === Role.USER && "ml-auto"
      )}
    >
      {children}
    </div>
  );
};

export { MessageBox };

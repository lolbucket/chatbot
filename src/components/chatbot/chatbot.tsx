import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";
import { ChatbotHeader } from "./chatbot-header";
import { ChatbotInput } from "./chatbot-input";
import { Message } from "../../types/message";
import { Role } from "../../enums/role";
import { MessageBox } from "./message-box";
import chatService from "../../services/chat.service";
import { Interweave } from "interweave";
import { SimillarQuestions } from "./simillar-questions";

type ChatbotProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: Role.BOT,
      content: "Вітаю! Яке питання Вас цікавить?",
    },
  ]);
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const chatBottomContentRef = useRef<HTMLDivElement>(null);

  const handleBotMessageSend = (userMessage: string) => {
    setIsResponseLoading(true);

    const botResponse = chatService.getBotResponse(userMessage);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: botResponse.sender, content: botResponse.content },
    ]);

    if (
      botResponse?.similarQuestions &&
      botResponse?.similarQuestions?.length > 0
    ) {
      const simillarQuestions = botResponse.similarQuestions.map(
        (response) => response.message
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: Role.BOT,
          content: (
            <SimillarQuestions
              questions={simillarQuestions}
              onMessageSend={handleUserMessageSend}
            />
          ),
        },
      ]);
    }

    setIsResponseLoading(false);
  };

  const handleUserMessageSend = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, sender: Role.USER },
    ]);
    handleBotMessageSend(message);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (chatBottomContentRef.current) {
      chatBottomContentRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isOpen, messages.length]);

  return (
    <div
      className={cn(
        "absolute flex flex-col gap-2 bottom-[calc(theme(size.16)+10px)] right-0 w-[400px] h-[500px] bg-white border border-zinc-300 rounded-lg p-3 shadow-md invisible",
        isOpen && "visible animate-chat-open"
      )}
    >
      <ChatbotHeader onClose={onClose} />
      <div className="h-full overflow-y-auto rounded border border-zinc-300 p-2 flex flex-col gap-3">
        {messages.map((message, index) => (
          <MessageBox key={index} sender={message.sender}>
            {typeof message.content === "string" ? (
              <Interweave content={message.content} />
            ) : (
              message.content
            )}
          </MessageBox>
        ))}
        <div ref={chatBottomContentRef} />
      </div>
      <ChatbotInput
        isLoading={isResponseLoading}
        onMessageSend={handleUserMessageSend}
      />
    </div>
  );
};

export { Chatbot };

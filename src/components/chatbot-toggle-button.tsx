import { MessageCircle } from "lucide-react";

const ChatbotToggleButton = ({
  ...props
}: React.ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      type="button"
      aria-label="Toggle chat window"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full flex items-center justify-center size-16"
      {...props}
    >
      <MessageCircle size={32} />
    </button>
  );
};

export { ChatbotToggleButton };

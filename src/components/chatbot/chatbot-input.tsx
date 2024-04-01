import { Send } from "lucide-react";

type ChatbotInputProps = {
  isLoading?: boolean;
  onMessageSend?: (message: string) => void;
};

const ChatbotInput = ({
  isLoading = false,
  onMessageSend = () => {},
}: ChatbotInputProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData.get("message") as string;

    onMessageSend(message);
    form.reset();
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        id="textbox"
        name="message"
        placeholder="Питання"
        required
        className="border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      />
      <button
        disabled={isLoading}
        id="send-message-btn"
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-r-lg flex items-center justify-center px-3 py-2 disabled:bg-gray-400 disabled:text-gray-600"
        aria-label="Send message"
      >
        <Send />
      </button>
    </form>
  );
};

export { ChatbotInput };

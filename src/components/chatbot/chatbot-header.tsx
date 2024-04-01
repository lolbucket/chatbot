import { X } from "lucide-react";

type ChatbotHeaderProps = {
  onClose?: () => void;
};

const ChatbotHeader = ({ onClose }: ChatbotHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="media">
          <img
            src="https://www.kspu.edu/FileDownload.ashx/MAIN%20LOGO%20color.png?id=c9775b67-1f58-45cc-8f02-c51dd4bf29c0&width=0&height=0"
            className="rounded-circle float-left img-thumbnail"
            width="32px"
            alt="KSPU logo image"
          />
        </div>
        <h2 className="text-lg font-medium">Чат-консультант</h2>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="bg-white text-gray-400 hover:text-gray-600 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        aria-label="Close chat window"
      >
        <X />
      </button>
    </div>
  );
};

export { ChatbotHeader };

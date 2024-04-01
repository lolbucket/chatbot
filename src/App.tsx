import { useState } from "react";
import { Chatbot, ChatbotToggleButton } from "./components/components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChatWindow = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 text-black">
      <Chatbot isOpen={isOpen} onClose={handleToggleChatWindow} />
      <ChatbotToggleButton onClick={handleToggleChatWindow} />
    </div>
  );
}

export default App;

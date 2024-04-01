type SimillarQuestionsProps = {
  questions: string[];
  onMessageSend: (message: string) => void;
};

const SimillarQuestions = ({
  questions,
  onMessageSend,
}: SimillarQuestionsProps) => {
  return (
    <div className="grid gap-2 text-sm">
      Схожі питання:
      {questions.map((question, index) => (
        <button
          type="button"
          key={index}
          onClick={() => onMessageSend(question)}
          className="text-left text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2 me-2"
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export { SimillarQuestions };

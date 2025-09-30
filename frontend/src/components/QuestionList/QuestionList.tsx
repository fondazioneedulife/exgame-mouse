import { useState } from "react";
import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";

type QuestionListProps = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionListProps) => {
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleAnswer = (question: string, answer: string) => {
    setResponses((prev) => ({ ...prev, [question]: answer }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Risposte finali:", responses);
  };

  return (
    <form className="QuestionList" onSubmit={handleSubmit}>
      {QuestionsList.map((q, idx) => (
        <QuestionComponent
          key={idx}
          question={q.question}
          answers={q.answers}
          selectedAnswer={responses[q.question]}
          onAnswer={(answer) => handleAnswer(q.question, answer)}
        />
      ))}
      <button type="submit">Invia tutte le risposte</button>
    </form>
  );
};

export default QuestionList;

import { useState } from "react";
import type { QuestionType } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";

type QuestionList = {
  questionsList: QuestionType[];
};

const QuestionList = ({ questionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<string, string>>({});

  return (
    <div className="QuestionList">
      {questionsList.map((Question, idx) => (
        <QuestionComponent
          key={idx}
          question={Question.question}
          answers={Question.answers}
          response={responses[idx]}
          setReponse={(value: string) =>
            setResponses({ ...responses, [idx]: value })
          }
        />
      ))}
    </div>
  );
};

export default QuestionList;

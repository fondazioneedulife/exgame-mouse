
import { useState } from "react";
import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";


type QuestionList = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionList) => {
  const [responses, setResponses] = useState ({
    "0": "Marsiglia",
    "1": "Petrarca",
  });
  return (
      <div className="QuestionList">
        {QuestionsList.map((Question, idx) => (
          <QuestionComponent 
            key={idx}
            question={Question.question}
            answers={Question.answers}
            response={responses[idx]}
            setResponse={(value: string) =>
              setResponses({ ...responses, [idx]: value }) //crea nuovo oggetto, e buttale tutte dentro,
        }
          />
        ))}
      </div>
  )
};

export default QuestionList;
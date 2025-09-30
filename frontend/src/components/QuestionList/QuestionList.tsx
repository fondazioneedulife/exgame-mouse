
import type { QuestionComponentProps } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import { useState } from "react";


type QuestionList = {
  QuestionsList: QuestionComponentProps[];
};

const QuestionList = ({ QuestionsList }: QuestionList) => {
  const [responses, setResponses] = useState<{ [key: number]: string }>({
    0: "Marsiglia",
    1: "Petrarca",
  });

  console.log ("Lo stato in questo momento é: ", JSON.stringify(responses, null, 2));

  return (
    <div className="QuestionList">
      {QuestionsList.map((Question, idx) => (
        <QuestionComponent key={idx} question={Question.question} answers={Question.answers} response={responses[idx]} setResponse={(value: string) => { setResponses({ ...responses, [idx]: value }) }} />
      ))}
    </div>
  );
};


export default QuestionList;

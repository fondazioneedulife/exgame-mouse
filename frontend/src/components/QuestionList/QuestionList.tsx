
import { useState } from "react";
import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";


type QuestionList = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionList) => {
  const [responses, setResponses] = useState({})
  console.log(responses);

  return(
  <div className="QuestionList">
    {QuestionsList.map((Question, idx) => (
      <QuestionComponent key={idx} id={"" + idx}  question={Question.question} answers={Question.answers} response={responses[idx]} setResponses={setResponses} />

    ))}
  </div>
);
}

export default QuestionList;
import { useState } from "react";
import type { QuestionType } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";

type QuestionList = {
  questionsList: QuestionType[];
};

const QuestionList = ({ questionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<string, string>>({});

  console.log(
    "Lo stato in questo momento è: ",
    JSON.stringify(responses, null, 2),
  );

  return (
    <div className="QuestionList">
      {questionsList.map((Question, idx) => (
        <QuestionComponent
          key={idx}
          question={Question.question}
          answers={Question.answers}
          response={responses[idx]}
          setReponse={(value: string) => {
            setResponses({ ...responses, [idx]: value });
            console.log(
              "Hai selezionato: ",
              value,
              "devo inserire questo valore nella domanda: ",
              idx,
            );
          }}
        />
      ))}

      <div className={classes.actions}>
        <button className={classes.submit}>Consegna</button>
      </div>
    </div>
  );
};

export default QuestionList;

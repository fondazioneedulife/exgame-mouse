import { useState } from "react";
import type {
  AnswerId,
  QuestionId
} from "../../../../api/types";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType } from "./types";

type QuestionList = {
  questionsList: QuestionType[]; // ATTENZIONE: QuestionType è cambiato!
  submit: (responses: Record<QuestionId, AnswerId>) => void;
};

const QuestionList = ({ questionsList, submit }: QuestionList) => {
  const [responses, setResponses] = useState<Record<QuestionId, AnswerId>>({});

  const handleSubmit = () => {
    submit(responses);
  };

  return (
    <div className="QuestionList">
      {questionsList.map((question) => (
        <QuestionComponent
          key={question._id}
          question={question}
          response={responses[question._id] || ""}
          setResponse={(value: string) => {
            setResponses({ ...responses, [question._id]: value });
            console.log(
              "Hai selezionato: ",
              value,
              "devo inserire questo valore nella domanda: ",
              question._id,
            );
          }}
        />
      ))}

      <div className={classes.actions}>
        <button className={classes.submit} onClick={handleSubmit}>
          Consegna
        </button>
      </div>
    </div>
  );
};

export default QuestionList;

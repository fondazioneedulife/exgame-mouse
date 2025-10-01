import { useState } from "react";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType } from "./types";

type QuestionList = {
  questionsList: QuestionType[]; // ATTENZIONE: QuestionType è cambiato!
};

const QuestionList = ({ questionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    console.log(
      "Lo stato che stai inviando è:\n",
      JSON.stringify(responses, null, 2),
    );
    // Qui potresti inviare le risposte a un server o fare altre azioni
  };

  return (
    <div className="QuestionList">
      {questionsList.map((question) => (
        <QuestionComponent
          key={question._id}
          question={question}
          response={responses[question._id]}
          setReponse={(value: string) => {
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

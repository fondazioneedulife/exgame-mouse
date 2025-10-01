import { useState } from "react";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { Answer, QuestionType } from "./types";

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
      {questionsList.map((question, idx) => {
  const key = question._id ?? String(idx); // chiave stabile
  return (
    <QuestionComponent
      key={key}
      question={question}
      response={responses[key]}   // usa la stessa chiave
      setResponse={(value: Answer) => {
        setResponses({ ...responses, [key]: value.answer });
        console.log(
          "Hai selezionato: ",
          value,
          "devo inserire questo valore nella domanda: ",
          key,
        );
      }}
    />
  );
})}
      
      <div className={classes.actions}>
        <button className={classes.submit} onClick={handleSubmit}>
          Consegna
        </button>
      </div>
    </div>
  );
};

export default QuestionList;

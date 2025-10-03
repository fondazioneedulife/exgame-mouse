import { useState } from "react";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType } from "./types";
import type { SubscriptionType, SubscriptionTypeQuestion } from "../../../../api/types";

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
    const requestBody : SubscriptionType = {
      _id: "64a7f4e2e4b0c8b1f0d6c9a1", // ID della sottoscrizione esistente
      exam_id: "64a7f4e2e4b0c8b1f0d6c9a0", // ID dell'esame}
      student_id: "64a7f4e2e4b0c8b1f0d6c9ff", // ID dello studente
      questions: Object .entries(responses).map(([question_id, answer_id]) => ({
        question_id,
        responses: [{ answer_id }],
      } as SubscriptionTypeQuestion
    )),
    };

    fetch("http://localhost:3000/api/subscriptions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    // Qui potresti inviare le risposte a un server o fare altre azioni
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

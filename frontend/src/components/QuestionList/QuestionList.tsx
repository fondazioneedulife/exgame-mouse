import { useState } from "react";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType, SubscriptionType } from "./types";
import { Subscription } from "../../pages/Subscription";
import type { SubscriptionQuestion } from "../../../../api/types";

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

    const subscription: SubscriptionType = {
      _id: "id_001",
      exam_id: "exam_001",
      student_id: "student_001",
      questions: Object.entries(responses).map(([question_id, response]) => ({
        question_id,
        responses: [response],
      } as SubscriptionQuestion
      )),
    }
    // Qui potresti inviare le risposte a un server o fare altre azioni
    fetch("http://localhost:3000/api/subscriptions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscription),
    })
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

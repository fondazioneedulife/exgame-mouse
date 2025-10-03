import { useState } from "react";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType, SubscriptionType } from "../../../../api/types";
//import { Subscription } from "../../pages/Subscription";

type QuestionList = {
  questionsList: QuestionType[]; // ATTENZIONE: QuestionType è cambiato!
};

const QuestionList = ({ questionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<QuestionId, AnswerId>>({});

  const handleSubmit = () => {
    console.log(
      "Lo stato che stai inviando è:\n",
      JSON.stringify(responses, null, 2),
    );
    
    // Qui potresti inviare le risposte a un server o fare altre azioni
    const data: SubscriptionType = {
      _id: "subscription_id_example",
      exam_id: "exam_id_example",
      student_id: "student_id_example",
      questions: Object.entries(responses).map(([questionId, answerId]) => ({
        question_id: questionId,
        responses: [{ answer_id: answerId }],
      })),
    };

    fetch("http://localhost:3000/subscriptions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });
  };
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

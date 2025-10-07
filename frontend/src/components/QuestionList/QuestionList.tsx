import { useState } from "react";
import { useNavigate } from "react-router";
import type {
  AnswerId,
  QuestionId,
  SubscriptionQuestion,
  SubscriptionType,
} from "../../../../api/types";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType } from "./types";

type QuestionList = {
  questionsList: QuestionType[]; // ATTENZIONE: QuestionType è cambiato!
};

const QuestionList = ({ questionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<QuestionId, AnswerId>>({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(
      "Lo stato che stai inviando è:\n",
      JSON.stringify(responses, null, 2),
    );
    // Qui potresti inviare le risposte a un server o fare altre azioni

    // L'api richiede un oggetto di tipo SubscriptionType, trasformo la variabile di stato `responses` in questo oggetto:
    const requestBody: SubscriptionType = {
      _id: "subscription_id_example",
      exam_id: "exam_id_example",
      student_id: "student_id_example",
      questions: Object.entries(responses) //
        // {"questionId": "answerId", "questionId": "answerId"} ->
        // [[questionId, answerId], [questionId, answerId], ...]
        .map(
          ([questionId, answerId]) =>
            ({
              question_id: questionId,
              responses: [{ answer_id: answerId }],
            }) as SubscriptionQuestion,
        ),
    };

    // Invio l'oggetto al server
    fetch("http://localhost:3000/api/subscriptions", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).finally(() => navigate("/"));
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

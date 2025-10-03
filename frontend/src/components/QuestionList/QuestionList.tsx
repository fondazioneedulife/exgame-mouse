import { useState } from "react";
import QuestionComponent from "./QuestionComponent/QuestionComponent";
import classes from "./QuestionList.module.css";
import type { QuestionType } from "./types";
import type { SubscriptionQuestion, SubscriptionType} from "../../../../api/types";

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

    const body: SubscriptionType = {
      _id: "example_id",
      exam_id: "exam_id_example",
      student_id: "student_id_example", 
      questions: Object.entries(responses).map(([questionId, answerId]) => ({
        question_id: questionId,
        responses: [{answer_id: answerId}],
      } as SubscriptionQuestion)),
    };

    fetch(`http://localhost:3000/api/subscriptions`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(body)
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

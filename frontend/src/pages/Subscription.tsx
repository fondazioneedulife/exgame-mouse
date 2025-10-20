import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { AnswerId, ExamType, QuestionId, SubscriptionQuestion, SubscriptionType } from "../../../api/types";
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import { chips } from "../mocks/chips";

/**
 * Invoca una API e restituisce i dati.
 */
const useApiData = (subcriptionId: string): [ExamType, SubscriptionType] => {
  const [subscription, setSubscription] = useState<SubscriptionType>({} as SubscriptionType);
  const [exam, setExam] = useState<ExamType>({} as ExamType);

  useEffect(() => {
    // DA RIPRISTINARE quando sarà pronta l'api
    fetch("http://localhost:3000/api/subscriptions/" + subcriptionId)
      .then((response) => response.json())
      .then((response: SubscriptionType) => {
        console.log("Subscription response:", response);
        setSubscription(response);
        return fetch(
          `http://localhost:3000/api/exams/${response.exam_id}`,
        )
      })
      .then((response) => response.json())
      .then((exam: ExamType) => {
        setExam(exam);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });

    // setState(questions); // DA RIMUOVERE quando sarà pronta l'api
  }, []);

  return [exam, subscription];
};

export const Subscription = () => {
  const { subcriptionId } = useParams();
  const navigate = useNavigate();

  const [exam, subscription] = useApiData(subcriptionId || "");

  const putSubscription = (responses: Record<QuestionId, AnswerId>) => {
    console.log(
      "Lo stato che stai inviando è:\n",
      JSON.stringify(responses, null, 2),
    );
    // Qui potresti inviare le risposte a un server o fare altre azioni

    // L'api richiede un oggetto di tipo SubscriptionType, trasformo la variabile di stato `responses` in questo oggetto:
    const requestBody: SubscriptionType = {
      ...subscription!,
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
    }).finally(() => {
      navigate("/");
    });

    // ... quello che scrivo qui viene eseguito dopo aver chiamato l'api, ma PRIMA che arrivi la risposta
  };


  return (
    <>
      <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
      <Description classe="1A" tipoDiTest="Matematica"></Description>
      <ChipList chips={chips}></ChipList>
      <ClockComponent tempo={7200}></ClockComponent>
      <QuestionList questionsList={exam.questions || []} submit={putSubscription} />
    </>
  );
};

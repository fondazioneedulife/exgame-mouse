import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import type { ExamType } from "../components/QuestionList/types";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import { chips } from "../mocks/chips";

/**
 * Invoca una API e restituisce i dati.
 */
const useApiData = (url: string, defaultState: ExamType) => {
  const [state, setState] = useState<ExamType>(defaultState);

  useEffect(() => {
    // DA RIPRISTINARE quando sarà pronta l'api
    fetch("http://localhost:3000/api/subscriptions/" + subcriptionId,)
      .then((response) => response.json())
      .then((response: ExamType) => {
        setState(response);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });

    // setState(questions); // DA RIMUOVERE quando sarà pronta l'api
  }, []);

  return state;
};

export const Subscription = () => {
  const { subcriptionId } = useParams();

  console.log("ID SOTTOISCRIZONE", subcriptionId);

  useEffect(() => {
    // qui chiamiamo l'API per prendere i dettagli della subscription
    fetch('http://localhost:3000/api/subscriptions/${subcriptionId}')
      .then((response) => response.json())
      .then((data: SubscriptionType) => {
        console.log("Subscription:", data);
        const examId = data.exam_id;
        return fetch('http://localhost:3000/api/exams/${examId}');
      })
      .then((response) => response.json())
      .then((examData: ExamType) => {
          console.log("Exam data:", examData);
          // qui puoi aggiornare lo stato con i dati dell'esame
      });

      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });

  }, [];

  //const exam = useApiData(

        // TODO: dopo aver invocato la /subscriptions/:id, prendere l'exam_id
        // e fare una seconda chiamata alla /exams/:id per prendere le domande
  //);

  // ordinaIlCaffè().then(beviIlCaffe).then(pagaIlCaffe)

  return (
    <>
      <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
      <Description classe="1A" tipoDiTest="Matematica"></Description>
      <ChipList chips={chips}></ChipList>
      <ClockComponent tempo={7200}></ClockComponent>
      <QuestionList questionsList={exam.questions || []} />
    </>
  );
};

import { useEffect, useState } from "react";
import { data, useParams } from "react-router";
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
    fetch(url)
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

  useEffect(() => {
    fetch(`http://localhost:3000/api/subscriptions/${subcriptionId}`)
    .then((response) => response.json())
    .then((examData:ExamType) => {
      console.log("Exam Data: ", examData)
    })
  })

  const exam = useApiData(
    "http://localhost:3000/api/subscriptions/" + subcriptionId,
    {} as ExamType,
    // TODO: dopo aver invocato la /subscriptions/:id, prendere l'exam_id
    // e fare una seconda chiamata alla /exams/:id per prendere le domande
  );

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

import { useEffect, useState } from "react";
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import type { ExamType } from "../../../api/types";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import { chips } from "../mocks/chips";

/**
 * Invoca una API e restituisce i dati.
 */
const useApiData = (url: string, defaultState: ExamType) => {
  const [state, setState] = useState<ExamType>(defaultState);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setState(response);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });

  }, []);

  return state;
};

export const Subscription = () => {
  const exam = useApiData(
    "http://localhost:3000/api/exams/exam_001",
    {} as ExamType,
  );

  return (
    <>
      <UserInfoComponent testo="Elisa Pozzatti"></UserInfoComponent>
      <Description classe="1A" tipoDiTest="Matematica"></Description>
      <ChipList chips={chips}></ChipList>
      <ClockComponent tempo={7200}></ClockComponent>
      <QuestionList questionsList={exam.questions || []} />
    </>
  );
};

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
    fetch(url)
      .then((response) => response.json())
      .then((response: ExamType) => {
        setState(response);
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });

    // setState(questions); // DA RIMUOVERE quando sarà pronta l'api (versione mock)
  }, []);

  return state;
};

export const Subscription = () => {
  const { id } = useParams();

  const exam = useApiData(
    "http://localhost:3000/api/exams/" + id,
    {} as ExamType,
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

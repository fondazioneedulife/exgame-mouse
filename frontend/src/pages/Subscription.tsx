import { useEffect, useState } from "react";
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
const useApiData = (url: string, defaultState: ExamType[]) => {
  const [state, setState] = useState<ExamType[]>(defaultState);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: ExamType[] | ExamType) => {
        // Se l’API restituisce un array → settiamo direttamente
        // Se l’API restituisce un singolo oggetto → lo wrappiamo in un array
        if (Array.isArray(data)) {
          setState(data);
        } else {
          setState([data]);
        }
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });
  }, [url]);

  return state;
};

export const Subscription = () => {
  const exams = useApiData("http://localhost:3000/api/exams/", []);

  return (
    <>
      <UserInfoComponent testo="Alberto Molon" />
      <Description classe="1A" tipoDiTest="Matematica" />
      <ChipList chips={chips} />
      <ClockComponent tempo={7200} />
      {exams.map((exam, index) => (
        <QuestionList key={index} questionsList={exam.questions || []} />
      ))}
    </>
  );
};
export default Subscription;

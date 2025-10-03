import { useEffect, useState } from "react";
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import type { ExamType } from "../components/QuestionList/types";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import { chips } from "../mocks/chips";
// import { questions } from "../mocks/questions";

/**
 * Invoca una API e restituisce i dati.
 */
const useApiData = (url: string, defaultState: ExamType[]) => {
  const [state, setState] = useState<ExamType[]>(defaultState);

  useEffect(() => {
    // DA RIPRISTINARE quando sarà pronta l'api
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setState(response);
      })
      .catch((error)=>{
        console.error("Errore nel fetch: ", error)
      })
  }, []);

  return state;
};

export const Subscription = () => {
  const exams = useApiData("http://localhost:3000/api/exams", []);

  // ordinaIlCaffè().then(beviIlCaffe).then(pagaIlCaffe)

  return (
    <>
      {exams.map((exam) => (
        <div key={exam._id}>
          <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
          <Description classe="1A" tipoDiTest={exam.name}></Description>
          <ChipList chips={chips}></ChipList>
          <ClockComponent tempo={exam.max_time}></ClockComponent>
          <QuestionList questionsList={exam.questions || []} />
        </div>
      ))}
    </>
  );
};

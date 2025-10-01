import { useEffect, useState } from "react";
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import { chips } from "../mocks/chips";
import { questions } from "../mocks/questions";

const useAPIData = (url: string, defaultState: unknown) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    // fetch(url).then(
    //   response
    //     .then((response) => response.json())
    //     .then((response) => setState(response)),
  //   );
  setState(questions);
  }, []);

  return state;
};

export const Subscription = () => {
  const exam = useAPIData("http://localhost:8080/exams/matematica", []);
  return (
    <>
      <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
      <Description classe="1A" tipoDiTest="Matematica"></Description>
      <ChipList chips={chips}></ChipList>
      <ClockComponent tempo={7200}></ClockComponent>
      <QuestionList questionsList={exam.questions} />
    </>
  );
};

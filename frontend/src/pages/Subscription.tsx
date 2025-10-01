import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import { chips } from "../mocks/chips";
import { questions } from "../mocks/questions";

export const Subscription = () => {
  return (
    <>
      <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
      <Description classe="1A" tipoDiTest="Matematica"></Description>
      <ChipList chips={chips}></ChipList>
      <ClockComponent tempo={7200}></ClockComponent>
      <QuestionList questionsList={questions} />
    </>
  );
};

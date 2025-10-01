
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import Description from "../components/Description/Description";
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import QuestionList from "../components/QuestionList/QuestionList";
import { chips } from "../mocks/chips";
import { questions } from "../mocks/questions";

function Subscription() {
  return (
    <>
      <UserInfoComponent testo="Alberto Molon" />
      <Description classe="1A" tipoDiTest="Matematica" />
      <ChipList chips={chips} />
      <ClockComponent tempo={7200} />
      <QuestionList QuestionsList={questions} />
    </>
  );
}

export default Subscription;

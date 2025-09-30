/**
 * Il componente Subscription rappresenta la pagina che visualizza uno studente quando esegue un esame.
 */

import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";

type Chip = {
  type: string;
  testo: string;
};

type Question = {
  question: string;
  answers: string[];
};

type SubscriptionProps = {
  chips: Chip[];
  questions: Question[];  
};

export default function Subscription({ chips, questions }: SubscriptionProps) {
  return (
    <div>
      <UserInfoComponent testo="Alberto Molon" />
      <Description classe="1A" tipoDiTest="Matematica" />
      <ChipList chips={chips} />
      <ClockComponent tempo={7200} />
      <QuestionList QuestionsList={questions} />
    </div>
  );
}

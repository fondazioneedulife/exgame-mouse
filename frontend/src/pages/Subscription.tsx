import React from "react";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import Description from "../components/Description/Description";
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import QuestionList from "../components/QuestionList/QuestionList";

interface Chip {
  type: string;
  testo: string;
}

interface Question {
  question: string;
  answers: string[];
}

interface SubscriptionProps {
  chips: Chip[];
  questions: Question[];
}

const Subscription: React.FC<SubscriptionProps> = ({ chips, questions }) => {
  return (
    <>
      <UserInfoComponent testo="Alberto Molon" />
      <Description classe="1A" tipoDiTest="Matematica" />
      <ChipList chips={chips} />
      <ClockComponent tempo={7200} />
      <QuestionList QuestionsList={questions} />
    </>
  );
};

export default Subscription;

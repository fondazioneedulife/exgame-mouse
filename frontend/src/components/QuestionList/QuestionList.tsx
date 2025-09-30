
import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";


type QuestionList = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionList) => (
  <div className="QuestionList">
    {QuestionsList.map((Question, idx) => (
      <QuestionComponent key={idx}  question={Question.question} answers={Question.answers} />
    ))}
  </div>
);

export default QuestionList;
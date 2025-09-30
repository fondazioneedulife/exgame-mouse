
import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";



type QuestionListProps = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionListProps) => (
  <div className="QuestionList">
    {QuestionsList.map((Question, idx) => (
      <QuestionComponent 
      key={idx}  
      question={Question.question} 
      answers={Question.answers} 
      />
    ))}
  </div>
);

export default QuestionList;
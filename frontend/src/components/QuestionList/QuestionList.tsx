
import { useState } from "react";
import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";


type QuestionList = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record <string, string>>({});
  console.log(responses)
    
  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
  }
  return(
    <div className="QuestionList">
        {QuestionsList.map((Question, idx) => (
          <QuestionComponent key={idx}  question={Question.question} answers={Question.answers} response={responses[idx]} setResponse={(value: string)=> setResponses({ ...responses, [idx]: value})}/>
        ))}
      <button type="submit" onClick={handleSubmit}>Invia</button>
    </div>

  )
}


export default QuestionList;
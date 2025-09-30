
import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";


type QuestionList = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionList) => {
  const [responses, setResponses] = useState<Record<String, string>>({});

  console.log(
    "Lo stato in questo momento è:", 
    JSON.stringify(responses, null, 2)
  )

  return (
    <div className="QuestionList">
      {QuestionsList.map((Question, idx) => (
        <QuestionComponent 
          key={idx}  
          question={Question.question} 
          answers={Question.answers}
          response={responses[idx]}
          setResponses={(value: string) => 
            setResponses({...responses, [idx]: "value"})
          }
        />
      ))}
    </div>
  );
};

export default QuestionList;

import type { QuestionComponentProp } from "./QuestionComponent/QuestionComponent";
import QuestionComponent from "./QuestionComponent/QuestionComponent";


type QuestionList = {
  QuestionsList: QuestionComponentProp[];
};

const QuestionList = ({ QuestionsList }: QuestionList) => {
  const [responses, setResponses] = useState({
    "0": "Marsiglia",
    "1": "Petrarca",
  });

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


//dentro alla variabile di stato salva le doamnde
//creare un componente per la domanda

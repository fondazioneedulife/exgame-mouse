import questions from "./Questions.module.css"

function Questions(props) {
    return (
        <div className={questions.question}>
          <h3>{props.questionText}</h3>
          <input type="radio" name="response1" id="response1-1" />
          <label htmlFor="response1-1">{props.response1}</label><br/>
          <input type="radio" name="response1" id="response1-2" />
          <label htmlFor="response1-2">{props.response2}</label><br/>
          <input type="radio" name="response1" id="response1-3" />
          <label htmlFor="response1-3">{props.response3}</label><br/>
          <input type="radio" name="response1" id="response1-4" />
          <label htmlFor="response1-4">{props.response4}</label>
        </div>
    )
}

export default Questions;
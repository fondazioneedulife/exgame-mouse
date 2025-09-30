import UserInfoComponent from "../components/UserInfo/UserInfoComponent"
import Description from "../components/Description/Description"
import ChipList from "../components/ChipList/ChipList"
import ClockComponent from "../components/Clock/ClockComponent"
import QuestionList from "../components/QuestionList/QuestionList"
import { chips} from "../mocks/chips"
import { questions } from "../mocks/question"

export const Subscription = () => {
    return (
        <>
          <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
          <Description classe="1A" tipoDiTest="Matematica"></Description>
          <ChipList chips={chips}></ChipList>
          <ClockComponent tempo={7200}></ClockComponent>
          <QuestionList QuestionsList={questions.map(q => ({
            ...q,
            response: "",
            setResponse: () => {}
          }))} />
        </>

    )

};

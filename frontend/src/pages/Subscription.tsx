import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import ChipList from "../components/ChipList/ChipList";

import { chips } from "../mocks/chips";
import { questions } from "../mocks/questions";


function Subscription () {
return(
    <>
        <UserInfoComponent testo="Alessandro Molon"></UserInfoComponent>
          <Description classe="1A" tipoDiTest="Matematica"></Description>
          <ChipList chips={chips}></ChipList>
          <ClockComponent tempo={7200}></ClockComponent>
          <QuestionList QuestionsList={questions} />
    </>
)
} 

export default Subscription
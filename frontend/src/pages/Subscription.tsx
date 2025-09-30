
import ChipList from "../components/ChipList/ChipList";
import ClockComponent from "../components/Clock/ClockComponent";
import Description from "../components/Description/Description";
import QuestionList from "../components/QuestionList/QuestionList";
import UserInfoComponent from "../components/UserInfo/UserInfoComponent";
import { questions } from "../mocks/questions";
import { chips } from "../mocks/chips";
export const Subscription = () => {
    return (
        <>
        <div>
        <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
        <Description classe="1A" tipoDiTest="Matematica"></Description>
        <ChipList chips={chips}></ChipList>
        <ClockComponent tempo={7200}></ClockComponent>
        <QuestionList QuestionsList={questions} />
        </div>
        </>
    );
}
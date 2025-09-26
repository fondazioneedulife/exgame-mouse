import styles from "./App.module.css";

import Navbar from "./components/Navbar";
import UserPill from "./components/UserPill";
import ExamHeader from "./components/ExamHeader";
import TimerBox from "./components/TimerBox";
import Submit from "./components/Submit";
import Question from "./components/Question";

export default function App() {
  const questions = [
    {
      id: "q1",
      title: "Quanto fa 2 + 2?",
      options: ["3", "4", "5", "Dipende dalla fantasia"],
    },
    {
      id: "q2",
      title: "Quanto fa 3 × 3?",
      options: ["6", "9", "12", "Dipende dalla fantasia"],
    },
    {
      id: "q3",
      title: "Quante caramelle rimangono se ne hai 10 e ne mangi 2?",
      options: ["2", "4", "8", "10 (le hai solo guardate)"],
    },
    {
      id: "q4",
      title: "Quante zampe hanno due giraffe e mezzo?",
      options: ["6", "8", "10", "Dipende dalla fantasia"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <UserPill />
        <ExamHeader />
        <TimerBox />

        {questions.map((q, idx) => (
          <Question
            key={q.id}
            id={q.id}
            title={q.title}
            options={q.options}
            topDivider={idx !== 0}
          />
        ))}

        <Submit />
      </main>
    </>
  );
}

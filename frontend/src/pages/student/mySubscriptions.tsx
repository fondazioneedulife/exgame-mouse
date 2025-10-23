import { useEffect, useState } from "react";
import type { ExamType, SubscriptionType } from "../../../../api/types";
import { Table } from "../../components/Table/Table";

// = SubscriptionType & { name: string, schedule_date: string }
export type SubscribedExam = SubscriptionType &
  Pick<ExamType, "name" | "schedule_date">;

export const MySubscriptions: React.FC = () => {
  // qui voglio chiamare l'API per prendere le mie iscrizioni
  const [mySubscriptions, setMySubscriptions] = useState<SubscribedExam[]>([]);

  useEffect(() => {
    // chiamata API per prendere le mie iscrizioni
    fetch("http://localhost:3000/api/subscriptions")
    
      .then((response) => response.json())
      // .then(setMySubscriptions);
      // questa api ritorna un array di oggetti di tipo SubscriptionType
      // per ciascuno di questi oggetti, devo fare un'altra chiamata API per prendere i dettagli dell'esame
      // e aggiungerli all'oggetto SubscriptionType
      // l'api da chiamare è la /api/exams/:id, che ritorna un oggetto di tipo ExamType
      .then((mySubscriptions: SubscriptionType[]) => {
        const mySubscribedExams = mySubscriptions.map((subscription) => {
          return fetch(
            `http://localhost:3000/api/exams/${subscription.exam_id}`,
          )
            .then((response) => response.json())
            .then((exam: ExamType) => {
              return {
                ...subscription,
                name: exam.name,
                schedule_date: exam.schedule_date,
              } as SubscribedExam;
            });
        });

        Promise.all(mySubscribedExams)
          .then(setMySubscriptions)
          .catch(console.error);
      });
  }, []);

  const esamiDaSostenere = mySubscriptions.filter(
    (subscription) => subscription.status === "to-do",
  );

  const esamiSostenuti = mySubscriptions.filter(
    (subscription) => subscription.status === "completed",
  );

  return (
    <>
      <h2>Le mie iscrizioni</h2>

      <Table data={esamiDaSostenere} />

      <h2>Esami sostenuti</h2>

      <Table data={esamiSostenuti} />
    </>
  );
};

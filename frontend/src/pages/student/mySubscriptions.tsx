import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import type { ExamType, SubscriptionType } from "../../../../api/types";

export const MySubscriptions: React.FC = () => {
  // qui vogliamo chiamare l'API per prendere le mie iscrizioni
  const [mySubscriptions, setMySubscriptions] = useState<SubscriptionType[]>(
    [],
  );

  useEffect(() => {
    // chiamata API per prendere le mie iscrizioni
    fetch("http://localhost:3000/api/subscriptions")
      .then((response) => response.json())
      // .then(setMySubscriptions);
      .then((mySubscriptions: SubscriptionType[]) => {
        mySubscriptions.map((mySubscription) => {
          fetch("http://localhost:3000/api/exams/" + mySubscription.exam_id)
          .then((response) => response.json())
          .then((exam: ExamType) => {
            return {...mySubscription, name: exam.name, date: exam.schedule_date};
          })
        })
      })
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

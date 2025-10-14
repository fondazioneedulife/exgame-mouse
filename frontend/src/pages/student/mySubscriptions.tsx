import type { SubscriptionType } from "../../../../api/types";
import { Table } from "../../components/Table/Table";
import { useEffect, useState } from "react";


export const MySubscriptions: React.FC = () => {

  const [mySubscriptions, setMySubscriptions] = useState<SubscriptionType[]>([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/api/subscriptions").then((response) => response.json())
    .then((mySubscriptions: SubscriptionType[]) => {
      const mySubscribedExams = mySubscriptions.map((subscription) => {
        return fetch(`http://localhost:3000/api/esams/${subscription.exam_id}`)
          .then((response) => response.json())
          .then((exam: ExamType) => {
          return {
            ...subscription,
            name: exam.name,
            schedule_date: exam.schedule_date
          };
        })
      })
      Promise.all(mySubscribedExams).then(setMySubscriptions)
    })
  }, [])

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

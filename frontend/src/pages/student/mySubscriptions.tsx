import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import type { ExamType, SubscriptionType } from "../../../../api/types";

type SubscribedExams = SubscriptionType & {
  name: string;
  schedule_date: string;
};

export const MySubscriptions: React.FC = () => {
  const [mySubscriptions, setMySubscriptions] = useState<SubscriptionType[]>(
    [],
  );
  useEffect(() => {
    fetch("http://localhost:3000/api/subscriptions")
      .then((res) => res.json())
      // .then((data) => setMySubscriptions(data));
      .then((data: SubscriptionType[]) => {
        const mySubscribedExams = data.map((subscription) => {
          return fetch(`http://localhost:3000/api/exams/${subscription.exam_id}`)
            .then((res) => res.json())
            .then((exam: ExamType) => {
              return {
                ...subscription,
                name: exam.name,
                schedule_date: exam.schedule_date,
              } as SubscribedExams;
            });
        });
        Promise.all(mySubscribedExams).then(setMySubscriptions).catch(console.error);
      });
  }, []);

  console.log(mySubscriptions);

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

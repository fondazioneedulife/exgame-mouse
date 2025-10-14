import { Table } from "../../components/Table/Table";
import { useState, useEffect } from "react";
import type { SubscriptionType, ExamType } from "../../../../api/types";

export type MySubscribedExam = SubscriptionType & Pick<ExamType, "name" | "schedule_date">;

export const MySubscriptions: React.FC = () => {
  const [mySubscriptions, setMySubscriptions] = useState<SubscriptionType[]>(
    [],
  );

  useEffect(() => {
    fetch("http://localhost:3000/api/subscriptions")
      .then((response) => response.json())
      .then((mySubscriptions: SubscriptionType[]) => {
        const mySubscribedExam = mySubscriptions.map((sub) => {
          return fetch("http://localhost:3000/api/exams/" + sub.exam_id)
            .then((response) => response.json())
            .then((exam: ExamType) => {
              return { ...sub, name: exam.name, schedule_date: exam.schedule_date } as MySubscribedExam;
            })
        });
        Promise.all(mySubscribedExam).then(setMySubscriptions);
      });
  }, []);

  const esamiDaSostenere = mySubscriptions.filter(
    (subscription) => subscription.status == "to-do",
  );

  const esamiSostenuti = mySubscriptions.filter(
    (subscription) => subscription.status == "completed",
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

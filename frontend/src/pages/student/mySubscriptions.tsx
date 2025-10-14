import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import type { SubscriptionType, ExamType } from "../../../../api/types";

export type SubscriptionWithExam = SubscriptionType & {
  name: string;
  schedule_date: string;
};

export const MySubscriptionsPage = () => {
  const [mySubscriptions, setMySubscriptions] = useState<SubscriptionWithExam[]>([]);

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchSubscriptionsWithExamData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/subscriptions");
      const mySubscriptions: SubscriptionType[] = await response.json();

      // Creo un array di promesse per ogni subscription
      const subscriptionsWithExamData = await Promise.all(
        mySubscriptions.map(async (subscription) => {
          // Chiamata API per ottenere i dettagli dell’esame
          const examResponse = await fetch(`http://localhost:3000/api/exams/${subscription.exam_id}`);
          const exam: ExamType = await examResponse.json();

          // Ritorno un nuovo oggetto subscription arricchito
          return {
            ...subscription,
            name: exam.name,
            schedule_date: exam.schedule_date,
          };
        })
      );

      Promise.all(subscriptionsWithExamData).then(setMySubscriptions)

      // A questo punto salvo il nuovo array nello state
      setMySubscriptions(subscriptionsWithExamData);
    } catch (error) {
      console.error("Errore durante il fetch delle subscriptions:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchSubscriptionsWithExamData();
}, []);

if (loading) return <p>Cariacamento...</p>;


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

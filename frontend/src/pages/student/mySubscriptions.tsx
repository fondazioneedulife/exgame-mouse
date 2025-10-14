import { useEffect, useState } from "react";
import type { ExamType, SubscriptionType } from "../../../../api/types";
import { Table } from "../../components/Table/Table";

export type SubscribedExamType = SubscriptionType & {
  name: string;
  schedule_date: string; // schedule_date dall'esame
};

export const MySubscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<SubscribedExamType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1️⃣ Fetch principale: tutte le iscrizioni
        const res = await fetch("http://localhost:3000/api/subscriptions");
        if (!res.ok) throw new Error("Errore nel caricamento iscrizioni");
        const subs: SubscriptionType[] = await res.json();

        // 2️⃣ Per ogni iscrizione, prendo i dettagli dell'esame
        const enrichedSubs = await Promise.all(
          subs.map(async (subscription) => {
            const examRes = await fetch(
              `http://localhost:3000/api/exams/${subscription.exam_id}`,
            );
            if (!examRes.ok) throw new Error("Errore nel caricamento esame");
            const exam: ExamType = await examRes.json();

            // Unisci dati iscrizione + esame
            return {
              ...subscription,
              name: exam.name,
              schedule_date: exam.schedule_date,
            } as SubscribedExamType;
          }),
        );

        // 3️⃣ Salvo lo stato
        setSubscriptions(enrichedSubs);
      } catch (error) {
        console.error("Errore nel fetch:", error);
      }
    };

    fetchData();
  }, []);

  // 4️⃣ Filtra i dati
  const esamiDaSostenere = subscriptions.filter(
    (sub) => sub.status === "to-do",
  );

  const esamiSostenuti = subscriptions.filter(
    (sub) => sub.status === "completed",
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

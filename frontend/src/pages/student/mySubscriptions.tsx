import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import type { SubscriptionType, ExamType } from "../../../../api/types";


type SubscriptionWithExam = SubscriptionType & { exam?: ExamType };

export const MySubscriptions: React.FC = () => {
  const [mySubscriptions, setMySubscriptions] = useState<SubscriptionWithExam[]>([]);

  useEffect(() => {
    // uso una useEffect per fare la chiamata una volta al caricamento della pagina
    const fetchSubscriptions = async () => {
      try {
        // Chiamata per ottenere tutte le subscriptions
        const response = await fetch("http://localhost:3000/api/subscriptions");
        const subscriptions: SubscriptionType[] = await response.json();

        // Per ciascuna subscription, faccio una seconda chiamata per ottenere i dettagli dell’esame
        const enrichedSubscriptions = await Promise.all(
          subscriptions.map(async (sub) => {
            // l’API da chiamare è api/exams/:id
            const examResponse = await fetch(`http://localhost:3000/api/exams/${sub.exam_id}`);
            const exam: ExamType = await examResponse.json();

            // Aggiungo i dettagli dell’esame all’oggetto SubscriptionType
            return { ...sub, exam };
          })
        );

        // Salvo tutto nello state
        setMySubscriptions(enrichedSubscriptions);
      } catch (error) {
        console.error("Errore durante il caricamento delle subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  // filtro le iscrizioni in base allo stato
  const esamiDaSostenere = mySubscriptions.filter(
    (subscription) => subscription.status === "to-do"
  );

  const esamiSostenuti = mySubscriptions.filter(
    (subscription) => subscription.status === "completed"
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

import { useEffect, useState } from "react";
import type { ExamType, SubscriptionType } from "../../../../api/types";
import { Table } from "../../components/Table/Table";

export type SubscribedExam = ExamType &
  Pick<SubscriptionType, "status" | "grade">;

const useMySubscribedExams = () => {
  const [mySubscribedExams, setMySubscribedExams] = useState<SubscribedExam[]>(
    [],
  );

  useEffect(() => {
    let ignore = false;

    /**
     * Chiamo l'API per ottenere le iscrizioni dell'utente.
     */
    fetch("http://localhost:3000/api/subscriptions")
      .then((response) => response.json())
      .then((response: SubscriptionType[]) => {
        /**
         * Per ogni iscrizione, chiamo l'API per ottenere i dettagli dell'esame associato.
         */
        const mySubscribedExams: Promise<SubscribedExam>[] = response.map(
          (subscription) => {
            return fetch(
              `http://localhost:3000/api/exams/${subscription.exam_id}`,
            )
              .then((res) => res.json())
              .then((exam: ExamType) => ({
                ...exam,
                status: subscription.status,
                grade: subscription.grade,
              }));
          },
        );

        /**
         * Quando tutte le chiamate sono completate, aggiorno lo stato con l'elenco degli esami.
         */
        Promise.all(mySubscribedExams).then((subscribedExams) => {
          if (!ignore) {
            setMySubscribedExams(subscribedExams);
          }
        });
      })
      .catch((error) => {
        console.error("Errore nel fetch:", error);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return mySubscribedExams;
};

export const MySubscriptions: React.FC = () => {
  const mySubscriptions = useMySubscribedExams();

  const esamiDaSostenere = mySubscriptions.filter(
    (subscription) => subscription.status === "to-do",
  );

  const esamiSostenuti = mySubscriptions.filter(
    (subscription) => subscription.status === "completed",
  );

  if (mySubscriptions.length === 0) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <>
      <h2>Le mie iscrizioni</h2>

      <Table data={esamiDaSostenere} />

      <h2>Esami sostenuti</h2>

      <Table data={esamiSostenuti} />
    </>
  );
};

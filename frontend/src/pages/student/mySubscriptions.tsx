import { useState, useEffect } from "react";
import { Table } from "../../components/Table/Table";
import type { SubscriptionType } from "../../../../api/types";

export const MySubscriptions: React.FC = () => {

  const [mySubsctiptions, setMySubscriptions] = useState<SubscriptionType[]>(
    [],
  );

  useEffect(() => {
    fetch("http://localhost:3000/api/subscriptions")
      .then((response) => response.json())
      .then(setMySubscriptions);
  }, []);

  const esamiDaSostenere = mySubsctiptions.filter(
    (subscription) => subscription.status === "to-do",
  );

  const esamiSostenuti = mySubsctiptions.filter(
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

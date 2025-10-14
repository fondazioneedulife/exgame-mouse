import { useState, useEffect } from "react";
import { Table } from "../../components/Table/Table";
import { mySubscriptions } from "../../mocks/mySubscriptions";

export const MySubscriptions: React.FC = () => {

  const [mySubsctiptions, setMySubscriptions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/subscriptions")
      .then((response) => response.json())
      .then(setMySubscriptions);
}, []);

  const esamiDaSostenere = mySubscriptions.filter(
    (subscription) => !subscription.completed,
  );

  const esamiSostenuti = mySubscriptions.filter(
    (subscription) => subscription.completed,
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

import { Table } from "../../components/Table/Table";
import { mySubscriptions } from "../../mocks/mySubscriptions";

export const MySubscriptions = () => {
  const esamiDaSostenere = mySubscriptions.filter((sub) => !sub.completed);
  const esamiSostenuti = mySubscriptions.filter((sub) => sub.completed);


  return (
    <>
      <h2>Le mie iscrizioni</h2>
      <Table subscriptions={esamiDaSostenere} />

      <h2>Esami sostenuti</h2>
      <Table subscriptions={esamiSostenuti} />
    </>
  );
};

import { mySubscriptions } from "../..//mocks/mySubscriptions";
import { Table } from "../../components/Table/Table";

export const MySubscriptions: React.FC = () => {
  const esamiDaSostenere = mySubscriptions.filter(sub => !sub.completed);
  const esamiSostenuti = mySubscriptions.filter(sub => sub.completed);
  return (
    <>
      <h2>Esami da sostenere</h2>
      <Table subscriptions={esamiDaSostenere} />
      <h2>Esami sostenuti</h2>
      <Table subscriptions={esamiSostenuti} />
    </>
  );
};

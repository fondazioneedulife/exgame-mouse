import { mySubscriptions } from "../../mocks/mySubscriptions";
import { Table } from "../../components/Table/TableComponent";

export const MySubscriptions: React.FC = () => {
  const esamiDaSostenere = mySubscriptions.filter(
    (subscription) => !subscription.completed,
  );

  const esamiSostenuti = mySubscriptions.filter(
    (subscription) => subscription.completed,
  );

  return (
    <>
    <h2>Le mie iscrizioni</h2>
        
      <Table data = {esamiDaSostenere}/>
        
    <h2>Esami sostenuti</h2>

      <Table data = {esamiSostenuti}/>
    </>
  );
};

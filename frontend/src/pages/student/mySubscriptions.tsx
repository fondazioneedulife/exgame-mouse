import { Table } from "../../components/Table/Table";
import { mySubscriptions } from "../../mocks/mySubscriptions";

export const MySubscriptions: React.FC = () => {
  const esamiDaSostenere = mySubscriptions.filter((mySubscriptions) => !mySubscriptions.completed);

  const esamiSostenuti = mySubscriptions.filter((mySubscriptions) => mySubscriptions.completed);

  return (
    <>
      <h2>Le mie iscrizioni</h2>
      <Table data={esamiDaSostenere}/>
      
      <h2>Esami sostenuti</h2>
      <Table data={esamiSostenuti}/> 
    </>
  );
};


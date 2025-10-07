import { Table } from "../../components/Table/Table";
import { mySubscriptions } from "../../mocks/mySubscriptions";

export const MySubscriptions: React.FC = () => {
  
  // const esamiDaSostenere = mySubscriptions.filter(mySubscriptions => mySubscriptions.completed === false);
  
  // const esamiSostenuti = mySubscriptions.filter(mySubscriptions => mySubscriptions.completed === true);

  const esamiDaSostenere = mySubscriptions.filter(sub => !sub.completed);
  
  const esamiSostenuti = mySubscriptions.filter(sub => sub.completed);

  return (
    <>
      <h2>Le mie iscrizioni</h2>

      {/* Tabella con gli esami da sostenere */}

      <Table data={esamiDaSostenere}/>

      <h2>Esami sostenuti</h2>

      {/* Tabella con gli esami sostenuti */}

      <Table data={esamiSostenuti}/>
    </>
  );
};

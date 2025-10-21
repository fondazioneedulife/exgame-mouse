import { useNavigate } from "react-router";
import { useEffect } from "react";

export function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    // Esegue automaticamente il logout quando il componente viene montato
    handleLogout();
  }, []); // Array di dipendenze vuoto = esegue solo al mount

  return (
    <div className="logout-container">
      <h1>Logout</h1>
      <p>Stai uscendo dall'account...</p>
      <button onClick={handleLogout}>Logout immediato</button>
      <button onClick={() => navigate("/login")}>Torna al login</button>
    </div>
  );
}

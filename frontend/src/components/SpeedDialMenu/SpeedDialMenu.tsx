import {
  IconBellRinging,
  IconClipboardCheck,
  IconQuestionMark,
} from "@tabler/icons-react";
import { useState } from "react";
import styles from "./SpeedDialMenu.module.css";
import { useSocket } from "../../sockets/socketProvider";

const actions = [
  { icon: <IconBellRinging />, name: "Disturba", action: "disturb" },
  { icon: <IconClipboardCheck />, name: "Copia", action: "copy" },
  { icon: <IconQuestionMark />, name: "Chiedi all'insegnante", action: "ask" },
];

export const SpeedDialMenu = () => {
  const [open, setOpen] = useState(false);
  const { disturb, copy } = useSocket(); // 👈 prendi le funzioni dal context

  const handleToggle = () => setOpen(!open);

  const handleActionClick = (actionName: string) => {
    console.log(`Azione selezionata: ${actionName}`);

    switch (actionName) {
      case "Disturba":
        disturb();
        break;
      case "Copia":
        copy();
        break;
      case "Chiedi all'insegnante":
        alert("🔔 Funzione 'Chiedi all'insegnante' non ancora implementata");
        break;
      default:
        console.warn("Azione sconosciuta:", actionName);
    }

    setOpen(false);
  };

  return (
    <div className={styles.speedDial}>
      {open && (
        <div className={styles.actionsContainer}>
          {actions.map((action, index) => (
            <div
              key={action.name}
              className={styles.action}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
              onClick={() => handleActionClick(action.name)}
              title={action.name}
            >
              <span className={styles.icon}>{action.icon}</span>
              <span className={styles.tooltip}>{action.name}</span>
            </div>
          ))}
        </div>
      )}
      <button
        className={`${styles.mainButton} ${open ? styles.open : ""}`}
        onClick={handleToggle}
        aria-label="Menu azioni"
      >
        {open ? "✕" : "+"}
      </button>
    </div>
  );
};

export default SpeedDialMenu;

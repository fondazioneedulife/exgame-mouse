import React, { createContext, useContext, useEffect, useState } from "react";
import { socket } from "./socket";
import type { AnswerId, QuestionId } from "../../../api/types";

// ======================
// 🔹 Tipi condivisi
// ======================

export type SubscriptionId = string;

export type Responses = Record<QuestionId, AnswerId>;

export type SubscriptionAction = {
  subscriptionId: string;
  action: string;
  timestamp: number;
};

export type User = {
  id: string;
  name?: string;
  currentSubscriptionId?: string;
  data: Record<SubscriptionId, Responses>;
  actions: SubscriptionAction[];
};

// ======================
// 🔹 Context Type
// ======================

interface SocketContextType {
  socket: typeof socket;
  users: User[]; // <-- ✅ array di utenti, non un singolo User
  register: (name: string) => void;
  disturb: () => void;
  copy: () => void;
  updateResponses: (responses: Responses) => void;
  setSubscription: (subscriptionId: string) => void;
}

// ======================
// 🔹 Creazione del Context
// ======================

const SocketContext = createContext<SocketContextType | undefined>(undefined);

// ======================
// 🔹 Provider
// ======================

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]); // ✅ tipo corretto

  useEffect(() => {
    // ✅ Connessione
    socket.on("connect", () => {
      console.log("✅ Connesso al server socket:", socket.id);
    });

    // ✅ Ricezione utenti
    socket.on("users", (users: User[]) => {
      console.log("👥 Utenti connessi:", users);
      setUsers(users);
    });

    // ✅ Evento "disturb"
    socket.on("disturb", (payload: { from: string }) => {
      alert(`⚠️ Ti sta disturbando ${payload.from}`);
    });

    // ✅ Evento "copy"
    socket.on("copy", (data: Responses) => {
      console.log("📋 Hai copiato questi dati:", data);
    });

    // ✅ Cleanup alla disconnessione o smontaggio
    return () => {
      socket.off("connect");
      socket.off("users");
      socket.off("disturb");
      socket.off("copy");
    };
  }, []);

  // ======================
  // 🔹 Event Emitters
  // ======================

  const register = (name: string) => socket.emit("register", name);
  const disturb = () => socket.emit("disturb");
  const copy = () => socket.emit("copy");
  const updateResponses = (responses: Responses) =>
    socket.emit("updateResponses", responses);
  const setSubscription = (subscriptionId: string) =>
    socket.emit("currentSubscription", subscriptionId);

  // ======================
  // 🔹 Ritorno del Provider
  // ======================

  return (
    <SocketContext.Provider
      value={{
        socket,
        users,
        register,
        disturb,
        copy,
        updateResponses,
        setSubscription,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

// ======================
// 🔹 Hook personalizzato
// ======================

// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(
      "useSocket deve essere usato all’interno di un <SocketProvider>",
    );
  }
  return context;
};

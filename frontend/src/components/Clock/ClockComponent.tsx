import { useEffect, useState } from "react";
import styles from "./ClockComponent.module.css";

type ClockComponentProps = {
  tempo: number;
};

function useCountdown(tempo: number) {
  const [seconds, setSeconds] = useState(tempo);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);
  return seconds;
}

const ClockComponent = ({ tempo }: ClockComponentProps) => {
  const seconds = useCountdown(tempo);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    <div className={styles.clock}>
      Tempo rimasto : {h} ore, {m} minuti e {s} secondi
    </div>
  );
};

export default ClockComponent;

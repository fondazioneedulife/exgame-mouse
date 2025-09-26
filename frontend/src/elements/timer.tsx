import React, { useState, useEffect } from 'react';

const Timer = () => {
  const INITIAL_TIME = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);

  // Effetto countdown
  useEffect(() => {
    let timer = null;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        padding: '20px',
        borderRadius: '15px',
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        fontSize: '2rem',
        fontFamily: 'monospace',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={handleStart}
    >
      {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;

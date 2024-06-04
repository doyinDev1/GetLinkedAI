// TimerContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const TimerContext = createContext();

export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState({ minutes: 29, seconds: 59 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const { minutes, seconds } = prevTime;
          if (seconds > 0) {
            return { minutes, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { minutes: minutes - 1, seconds: 59 };
          } else {
            clearInterval(interval);
            return { minutes: 0, seconds: 0 };
          }
        });
      }, 1000);
    } else if (!isRunning && (time.minutes !== 0 || time.seconds !== 0)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);

  return (
    <TimerContext.Provider value={{ time, startTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

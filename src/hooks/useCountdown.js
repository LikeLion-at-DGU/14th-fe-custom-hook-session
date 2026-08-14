import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-08-25T00:00:00");

export const useCountdown = () => {
  const calculateTimeLeft = (animalDate) => {
    const dday = animalDate.getTime() - new Date().getTime();

    if (dday <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(dday / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dday / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((dday / (1000 * 60)) % 60);
    const seconds = Math.floor((dday / 1000) % 60);

    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(TARGET_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};
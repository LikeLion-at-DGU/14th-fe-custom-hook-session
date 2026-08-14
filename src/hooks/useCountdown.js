import { useEffect, useState } from "react";

export const useCountdown = () => {
  const animalDate = new Date("2026-08-25T00:00:00");

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
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(animalDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(animalDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [animalDate]);

  return timeLeft;
};
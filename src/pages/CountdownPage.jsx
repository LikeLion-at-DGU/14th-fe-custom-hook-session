import { useState, useEffect } from "react";
import { useGoBack } from "../hooks/useGoBack";
import { useCountdown } from "../hooks/useCountdown";

export const Countdown = () => {
  const targetDate = new Date("2026-08-25T00:00:00");
  const timeLeft = useCountdown(targetDate);

  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useCountdown 예제</h2>
      <h2>중앙해커톤까지 남은 시간</h2>
      <p>{`${timeLeft.days}일 ${timeLeft.hours}시간 ${timeLeft.minutes}분 ${timeLeft.seconds}초`}</p>
    </div>
  );

};

export default Countdown;

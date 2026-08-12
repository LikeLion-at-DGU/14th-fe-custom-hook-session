import { useEffect, useState } from "react";
import { useGoBack } from "../hooks/useGoBack";
import { useWindowSize } from "../hooks/useWindowSize";

export const WindowSize = () => {
  // 실습 1. 하단 코드를 useWindowSize (커스텀 훅으로 바꿔주세요!)
  const {windowSize} = useWindowSize();

  const goBack = useGoBack();
  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useWindowSize 실습</h2>
      <p>화면 너비: {windowSize.width}px</p>
      <p>화면 높이: {windowSize.height}px</p>
    </div>
  );
};

export default WindowSize;

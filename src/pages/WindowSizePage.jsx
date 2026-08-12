import { useEffect, useState } from "react";
import { useGoBack } from "../hooks/useGoBack";
import { useWindowSize } from "../hooks/useWindowSize";


export const WindowSize = () => {
  const {windowSize} = useWindowSize();
  // 실습 1. 하단 코드를 useWindowSize (커스텀 훅으로 바꿔주세요!)
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

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

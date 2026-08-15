import { useEffect, useState } from "react";

export const useWindowSize = () => { // 커스텀 훅 정의 규칙 : use + 뒤 단어는 대문자로 시작
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => { // 창의 크기가 바뀔 때 마다 최신값으로 보여줌
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize); // resize 이벤트 발생시 handleResize 발생

    return () => {
      window.removeEventListener("resize", handleResize); // cleanup 함수로 위에서 생긴 이벤트 리스너 제거
    };
  }, []);

  return { windowSize }; // { windowSize } 객체로 반환
};
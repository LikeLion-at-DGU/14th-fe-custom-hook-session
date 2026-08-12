import { useMousePosition } from "../hooks/useSomething";
import { useGoBack } from "../hooks/useGoBack";

const YourOwnHook = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const mousePosition = useMousePosition();
  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useSomething 실습</h2>
      <p>마우스 x 좌표: {mousePosition.x}</p>
      <p>마우스 y 좌표: {mousePosition.y}</p>
    </div>
  );
};

export default YourOwnHook;

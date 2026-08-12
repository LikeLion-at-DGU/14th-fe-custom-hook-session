import { useBackgroundColor } from "../hooks/useSomething";
import { useGoBack } from "../hooks/useGoBack";

const YourOwnHook = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const [bgColor, setBgColor] = useBackgroundColor('#FFE2D2');

  const goBack = useGoBack();

  return (
    <div className="main-container">
      <h2 className="main-title">현재 배경색: {bgColor}</h2>
      <button className="back-btn" onClick={() => setBgColor('#FF8A5C')}>주황색</button>
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useSomething 실습</h2>
    </div>
  );
};

export default YourOwnHook;

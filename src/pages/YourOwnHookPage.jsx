import { useColor } from "../hooks/useColor";
import { useGoBack } from "../hooks/useGoBack";

const YourOwnHook = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const {color, changeColor} = useColor();

  const goBack = useGoBack();

  return (
    <>
    <button onClick={changeColor} style={{backgroundColor:color}}>
현재 색상 : {color}
    </button>
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useSomething 실습</h2>
    </div>
    </>
  );
};

export default YourOwnHook;

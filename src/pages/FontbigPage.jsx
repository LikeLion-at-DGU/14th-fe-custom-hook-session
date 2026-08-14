import { useGoBack } from "../hooks/useGoBack";
import { useFontbig } from "../hooks/useFontbig";

const Fontbig = () => {
  const { isBig, toggleSize } = useFontbig();
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~

  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>

      <h2
        className="main-title"
        style={{
          fontSize: isBig ? "100px" : "32px",
          transition: "0.3s",
        }}
      >
        usefontsize 예제
      </h2>

      <button onClick={toggleSize}>
        {isBig ? "글씨 원래대로" : "글씨 크게"}
      </button>
    </div>
  );
};

export default Fontbig;

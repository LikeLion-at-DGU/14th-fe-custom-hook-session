
import { useGoBack } from "../hooks/useGoBack";
import { useCount } from "../hooks/useCount";

const YourOwnHook = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const res = useCount();

  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useSomething 실습</h2>

      <button onClick={res.countUp}>+1</button>
      <button onClick={res.countDown}>-1</button>
      <button onClick={res.countPow}>^</button>
      <button onClick={res.countDiv}>/2</button>

      <p>{res.count}</p>
    </div>
  );
};

export default YourOwnHook;

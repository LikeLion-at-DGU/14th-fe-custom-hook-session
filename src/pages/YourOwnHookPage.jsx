import { useSomething } from "../hooks/useSomething";
import { useGoBack } from "../hooks/useGoBack";

const YourOwnHook = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const { money, start, compound } = useSomething();

  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useSomething 실습</h2>
    <button onClick={start}>금액 입력</button> 
    <br/><br/>
    <button onClick={compound}>복리 적용</button>
    <br/><br/>
    <p>{money}원</p>
    </div>
  );
};

export default YourOwnHook;

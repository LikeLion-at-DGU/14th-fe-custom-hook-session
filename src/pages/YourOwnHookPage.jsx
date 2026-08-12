import { useSomething } from "../hooks/useSomething";
import { useGoBack } from "../hooks/useGoBack";

const YourOwnHook = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const { isVisible, message, showToast } = useSomething();

  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useSomething 실습</h2>

      <button 
        onClick={() => showToast("토스트 버튼! 💾")}
        style={{ 
          padding: "10px", 
          fontSize: "16px", 
          color: "#ffffff",
          backgroundColor: "#000000"
        }}
      >
        토스트 버튼
      </button>

      {isVisible && (
        <div 
          style={{
            position: "fixed",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "12px 24px",
            borderRadius: "8px",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default YourOwnHook;

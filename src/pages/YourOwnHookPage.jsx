import { useSomething } from "../hooks/useSomething";
import { useGoBack } from "../hooks/useGoBack";

const YourOwnHook = () => {
  const { isHovered, hoverProps } = useSomething();
  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>

      <h2 {...hoverProps} style={{ fontSize: isHovered ? "50px" : "20px",}}className="main-title">
        useSomething 실습
      </h2>
    </div>
  );
};

export default YourOwnHook;
import { useCopyFeedback } from "../hooks/useCopyFeedback";
import { useGoBack } from "../hooks/useGoBack";

const CopyFeedback = () => {
  const { copied, copy } = useCopyFeedback();
  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useCopyFeedback 실습</h2>
      <h2>멋사 14기 중앙해커톤 화이팅!</h2>
      <button
        className="modern-btn"
        onClick={() => copy("멋사 14기 중앙해커톤 화이팅!")}
      >
        {copied ? "복사됨!" : "텍스트 복사"}
      </button>
    </div>
  );
};

export default CopyFeedback;

import { useConfetti } from "../hooks/useConfetti";
import { useGoBack } from "../hooks/useGoBack";

const Confetti = () => {
  const { fire } = useConfetti();
  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useConfetti 예제</h2>
      <button className="modern-btn" onClick={fire}>
        폭죽 발사
      </button>
    </div>
  );
};

export default Confetti;

import { useOwnHook } from "../hooks/useOwnHook";
import { useGoBack } from "../hooks/useGoBack";

export const OwnHook = () => {
  const isDark = useOwnHook();
  const goBack = useGoBack();

  console.log(isDark);

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useSomething 실습</h2>
      <p>다크모드 : {isDark === true ? '활성화' : '비활성화'}</p>
    </div>
  );
};

export default OwnHook;
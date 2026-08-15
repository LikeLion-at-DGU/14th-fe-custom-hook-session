import { useCountText } from "../hooks/useCountText";
import { useGoBack } from "../hooks/useGoBack";


  
const YourOwnHook = () => {
  const goBack = useGoBack();
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  
  const {
    text,
    countText,
    handleChange,
  } = useCountText();

  return (
    <div>
      <h2>자기소개 작성</h2>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="자기소개를 입력해주세요."
      />

      <p>현재 글자 수: {countText}자</p>
    </div>
  );
};

export default YourOwnHook;
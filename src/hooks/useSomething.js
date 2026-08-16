import { useState } from "react";

export function useSomething() {
  const [money, setMoney] = useState(0);
  const [rate, setRate] = useState(0);

  const start = () => {
    setMoney(Number(prompt("초기 금액")));
    setRate(Number(prompt("이율 (%)")));
  };

  const compound = () => {
    setMoney((prev) => prev * (1 + rate / 100));
  };

  return { money, start, compound };
}
  // 여러분의 use{Something}을 만들어주세요!
  // 정답은 없습니다. 커스텀훅의 필요성을 스스로 느껴보세요.
  // 아이디어를 생각하고, 스스로 구현하다가 어려우면 손 들어주세요!

// export default useSomething;

// import { useBackgroundColor } from "../hooks/useBackgroundColor";

// export const YourOwnHookPage = () => {
//   const { color, toggleColor } = useBackgroundColor();

//   return (
//     <div
//       style={{ backgroundColor: color, height: "100vh", transition: "0.3s" }}
//     >
//       <h2>useBackgroundColor 실습</h2>
//       <button onClick={toggleColor}>배경색 바꾸기</button>
//     </div>
//   );
// };

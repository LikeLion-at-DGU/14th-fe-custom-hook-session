import { useState } from "react";

export const useCount = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    const countPow = () => {
        setCount(count * count);
    };

    const countDiv = () => {
        setCount(count / 2);
    };

    return {
        count,
        countUp,
        countDown,
        countPow,
        countDiv,
    };
};
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

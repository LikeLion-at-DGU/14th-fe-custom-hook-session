import { useEffect, useState } from "react";

export const useLike = () => {
  const [like, setLike] = useState(0);

    const handleLike = () => {
      setLike((prev)=>prev+1);
    }

  return { like, handleLike };
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

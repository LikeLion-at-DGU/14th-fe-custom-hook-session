import { useLike } from "../hooks/useSomething";
import { useGoBack } from "../hooks/useGoBack";
import { useState, useEffect } from "react";

const YourOwnHook = () => {
  const { like, handleLike } = useLike();


  const goBack = useGoBack();

  return (
    <div className="main-container">
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>

      <h2 className="main-title">useSomething 실습</h2>

      <button className="like-btn" onClick={handleLike}>
        Like {like}
      </button>
    </div>
  );
};

export default YourOwnHook;

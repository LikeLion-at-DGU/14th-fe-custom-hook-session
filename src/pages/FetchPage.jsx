import { useFetch } from "../hooks/apis/useFetch";
import { useGoBack } from "../hooks/useGoBack";

export const Fetch = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const goBack = useGoBack();

  return (
    <div className="main-container" style={{ padding: "20px" }}>
      <button className="back-btn" onClick={goBack}>
        뒤로가기
      </button>
      <h2 className="main-title">useFetch 예제</h2>

      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

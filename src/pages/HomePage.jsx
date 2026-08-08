// import { useNavigate } from "react-router-dom";
// import {
//   HomeWrapper,
//   MainTitle,
//   SubTitle,
//   CardWrapper,
//   PracticeCard,
//   CardNumber,
//   CardTitle,
//   CardDesc,
// } from "./HomePage.styles";
// import "../styles/Main.styled.css";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <HomeWrapper>
//       <MainTitle>
//         신발custom?<span> nope!</span> custom hook 실습
//       </MainTitle>

//       <CardWrapper>
//         <PracticeCard onClick={() => handleButtonClick("/first")}>
//           <CardNumber>01</CardNumber>
//           <CardTitle>1번 실습</CardTitle>
//           <CardDesc>
//             axios로 데이터를
//             <br />
//             GET / POST 해보기
//           </CardDesc>
//         </PracticeCard>

//         <PracticeCard onClick={() => handleButtonClick("/second")}>
//           <CardNumber>02</CardNumber>
//           <CardTitle>2번 실습</CardTitle>
//           <CardDesc>
//             서울시 OPEN API로
//             <br />
//             미세먼지 TOP 3 찾기
//           </CardDesc>
//         </PracticeCard>

//         <PracticeCard onClick={() => handleButtonClick("/second")}>
//           <CardNumber>03</CardNumber>
//           <CardTitle>3번 실습</CardTitle>
//           <CardDesc>
//             서울시 OPEN API로
//             <br />
//             미세먼지 TOP 3 찾기
//           </CardDesc>
//         </PracticeCard>

//         <PracticeCard onClick={() => handleButtonClick("/second")}>
//           <CardNumber>04</CardNumber>
//           <CardTitle>4번 실습</CardTitle>
//           <CardDesc>
//             서울시 OPEN API로
//             <br />
//             미세먼지 TOP 3 찾기
//           </CardDesc>
//         </PracticeCard>
//       </CardWrapper>
//     </HomeWrapper>
//   );
// };

// export default HomePage;

import { useNavigate } from "react-router-dom";
import {
  HomeWrapper,
  MainTitle,
  SubTitle,
  CardWrapper,
  PracticeCard,
  CardNumber,
  CardTitle,
  CardDesc,
} from "./HomePage.styles";
import "../styles/Main.styled.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <HomeWrapper>
      <MainTitle>
        <span>custom hook</span> 실습 Let's go!
      </MainTitle>

      <CardWrapper>
        <PracticeCard onClick={() => handleButtonClick("/window-size")}>
          <CardNumber>01</CardNumber>
          <CardTitle>useWindowSize</CardTitle>
          <CardDesc>
            화면 크기 변화를
            <br />
            실시간으로 감지하기
          </CardDesc>
        </PracticeCard>

        <PracticeCard onClick={() => handleButtonClick("/countdown")}>
          <CardNumber>02</CardNumber>
          <CardTitle>useCountdown</CardTitle>
          <CardDesc>
            지정된 시간 동안
            <br />
            카운트다운 실행하기
          </CardDesc>
        </PracticeCard>

        <PracticeCard onClick={() => handleButtonClick("/confetti")}>
          <CardNumber>03</CardNumber>
          <CardTitle>useConfetti</CardTitle>
          <CardDesc>
            축하 효과와 함께
            <br />
            컨페티 효과 주기
          </CardDesc>
        </PracticeCard>

        <PracticeCard onClick={() => handleButtonClick("/fetch")}>
          <CardNumber>04</CardNumber>
          <CardTitle>useFetch</CardTitle>
          <CardDesc>
            커스텀 훅을 이용해
            <br />
            데이터 비동기 통신하기
          </CardDesc>
        </PracticeCard>

        <PracticeCard onClick={() => handleButtonClick("/your-own-hook")}>
          <CardNumber>05</CardNumber>
          <CardTitle>useSomething</CardTitle>
          <CardDesc>
            나만의 멋진
            <br />
            커스텀 훅 만들어보기
          </CardDesc>
        </PracticeCard>
      </CardWrapper>
    </HomeWrapper>
  );
};

export default HomePage;

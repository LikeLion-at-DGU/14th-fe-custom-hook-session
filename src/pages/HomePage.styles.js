import { styled } from "styled-components";

export const HomeWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(36px, 5.5vw, 68px) 32px 88px;
`;

export const SubTitle = styled.p`
  font-family: ${(props) => props.theme.font.mono};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: ${(props) => props.theme.subTextColor};
  margin-bottom: 18px;
`;

export const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  font-variation-settings: "wdth" 118, "wght" 800;
  font-weight: 800;
  font-size: clamp(36px, 6.4vw, 74px);
  line-height: 0.96;
  letter-spacing: -0.035em;
  margin-bottom: clamp(40px, 5vw, 58px);
  max-width: 12ch;
  animation: risoRise 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;

  /* 제목 위에 걸치는 주황색 판형 마크 */
  &::before {
    content: "";
    display: block;
    width: 72px;
    height: 10px;
    margin-bottom: 26px;
    background-color: ${(props) => props.theme.primaryColor};
    box-shadow: 5px 5px 0 ${(props) => props.theme.inkColor};
  }

  span {
    color: ${(props) => props.theme.primaryColor};
    /* 인쇄 어긋남처럼 잉크색이 살짝 밀려 찍힌 느낌 */
    text-shadow: 4px 4px 0 ${(props) => props.theme.inkColor};
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  align-items: start;

  /* 카드를 계단처럼 어긋나게 배치해 대각선 흐름을 만듭니다 */
  & > *:nth-child(2) {
    margin-top: 34px;
  }
  & > *:nth-child(3) {
    margin-top: 68px;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 22px;

    & > *:nth-child(2),
    & > *:nth-child(3) {
      margin-top: 0;
    }
  }
`;

export const PracticeCard = styled.div`
  position: relative;
  padding: 30px 26px 34px;
  background-color: ${(props) => props.theme.cardColor};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  border-radius: 0;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 7px 7px 0 ${(props) => props.theme.inkColor};

  /* 3장이 순서대로 인쇄되듯 등장합니다.
     backwards를 써야 등장이 끝난 뒤 hover transform이 정상 동작합니다. */
  animation: risoRise 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
  &:nth-child(1) {
    animation-delay: 0.14s;
  }
  &:nth-child(2) {
    animation-delay: 0.24s;
  }
  &:nth-child(3) {
    animation-delay: 0.34s;
  }

  /* hover 시 카드 아래에서 주황 잉크가 차오릅니다 */
  &::before {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 0;
    background-color: ${(props) => props.theme.primaryLight};
    transition: height 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 0;
  }

  /* 우측 하단 화살표 마커 */
  &::after {
    content: "→";
    position: absolute;
    right: 22px;
    bottom: 20px;
    font-family: ${(props) => props.theme.font.mono};
    font-size: 20px;
    color: ${(props) => props.theme.primaryColor};
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.22s ease, transform 0.22s ease;
    z-index: 1;
  }

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 13px 13px 0 ${(props) => props.theme.primaryColor};
  }

  &:hover::before {
    height: 100%;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }

  /* 내용이 배경 레이어 위로 오도록 */
  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const CardNumber = styled.div`
  font-family: ${(props) => props.theme.font.display};
  font-variation-settings: "wdth" 122, "wght" 800;
  font-weight: 800;
  font-size: 76px;
  line-height: 0.85;
  letter-spacing: -0.05em;
  margin-bottom: 22px;

  /* 평소엔 속이 빈 아웃라인 숫자, hover하면 주황색으로 채워집니다 */
  color: transparent;
  -webkit-text-stroke: 2px ${(props) => props.theme.inkColor};
  transition: color 0.26s ease, -webkit-text-stroke-color 0.26s ease;

  ${PracticeCard}:hover & {
    color: ${(props) => props.theme.primaryColor};
    -webkit-text-stroke-color: ${(props) => props.theme.inkColor};
  }
`;

export const CardTitle = styled.h2`
  font-family: ${(props) => props.theme.font.display};
  font-variation-settings: "wdth" 110, "wght" 700;
  font-weight: 700;
  font-size: 23px;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1.5px solid ${(props) => props.theme.borderColor};
`;

export const CardDesc = styled.p`
  font-family: ${(props) => props.theme.font.mono};
  font-size: 13.5px;
  line-height: 1.75;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.subTextColor};
`;

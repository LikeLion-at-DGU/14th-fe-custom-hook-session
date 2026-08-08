import { styled, keyframes } from "styled-components";

const stampIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-2.5deg) translateY(16px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: rotate(-2.5deg) translateY(0) scale(1);
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px 80px;
`;

export const RankingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 56px;
  gap: 32px;
`;

export const Ranking = styled.div`
  font-family: ${(props) => props.theme.font.display};
  font-variation-settings:
    "wdth" 112,
    "wght" 750;
  font-weight: 750;
  font-size: 25px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.paperColor};
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
  width: 176px;
  height: 176px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px;
  box-shadow: 7px 7px 0 ${(props) => props.theme.inkColor};
  /* backwards를 써야 등장이 끝난 뒤 hover transform이 정상 동작합니다 */
  animation: risoRise 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
  transition: transform 0.2s ease;

  /* 1위는 조금 더 크게, 뒤로 갈수록 옅어지도록 위계를 줍니다 */
  &:nth-child(1) {
    width: 206px;
    height: 206px;
    font-size: 29px;
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    background-color: ${(props) => props.theme.primaryDark};
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    background-color: ${(props) => props.theme.textColor};
    animation-delay: 0.3s;
  }

  &:hover {
    transform: rotate(-3deg) scale(1.03);
  }

  @media (max-width: 720px) {
    width: 142px;
    height: 142px;
    font-size: 21px;

    &:nth-child(1) {
      width: 166px;
      height: 166px;
      font-size: 24px;
    }
  }
`;

export const RankingDesWrapper = styled.div`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 620px;
  padding: 28px 32px;
  background-color: ${(props) => props.theme.cardColor};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  border-radius: 0;
  box-shadow: 8px 8px 0 ${(props) => props.theme.inkColor};
`;

export const RankingDes = styled.div`
  font-size: 16px;
  line-height: 1.65;
  padding-left: 14px;
  border-left: 4px solid ${(props) => props.theme.primaryColor};
`;

export const Caution = styled.div`
  font-family: ${(props) => props.theme.font.display};
  font-variation-settings:
    "wdth" 115,
    "wght" 800;
  font-weight: 800;
  font-size: clamp(19px, 3vw, 26px);
  letter-spacing: -0.02em;
  margin-top: 46px;
  padding: 12px 22px;
  color: ${(props) => props.theme.primaryColor};
  border: 2.5px dashed ${(props) => props.theme.primaryColor};
  border-radius: 0;
  animation: ${stampIn} 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.42s both;
`;

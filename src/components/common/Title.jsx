import { styled, keyframes } from "styled-components";

const inkWipe = keyframes`
  from { background-size: 0% 100%; }
  to   { background-size: 100% 100%; }
`;

const TitleWrapper = styled.h1`
  display: block;
  width: 100%;
  max-width: 1140px;
  margin: clamp(44px, 6vw, 72px) auto 0;
  padding: 0 32px 22px;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  animation: risoRise 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;

  &::before {
    content: "";
    display: block;
    width: 52px;
    height: 8px;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.primaryColor};
    box-shadow: 4px 4px 0 ${(props) => props.theme.inkColor};
  }
`;

const TitleText = styled.span`
  position: relative;
  display: inline-block;
  font-family: ${(props) => props.theme.font.display};
  font-variation-settings:
    "wdth" 112,
    "wght" 750;
  font-weight: 750;
  font-size: clamp(24px, 3.4vw, 40px);
  line-height: 1.14;
  letter-spacing: -0.025em;

  background-image: linear-gradient(
    to top,
    ${(props) => props.theme.primaryLight} 0.34em,
    transparent 0.34em
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  animation: ${inkWipe} 0.75s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both;
`;

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <TitleText>{title}</TitleText>
    </TitleWrapper>
  );
};

export default Title;

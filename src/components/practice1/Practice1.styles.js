import { styled } from "styled-components";

// ---------- GET 실습 ----------
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin: 44px auto 28px;
  padding: 0 32px;
`;

export const BtnContainer = styled.button`
  padding: 15px 26px;
  font-family: ${(props) => props.theme.font.mono};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.55;
  text-align: center;
  color: ${(props) => props.theme.paperColor};
  background-color: ${(props) => props.theme.primaryColor};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  border-radius: 0;
  cursor: pointer;
  box-shadow: 5px 5px 0 ${(props) => props.theme.inkColor};
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background-color 0.16s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryDark};

    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 ${(props) => props.theme.inkColor};
  }

  &:active {
    transform: translate(5px, 5px);
    box-shadow: 0 0 0 ${(props) => props.theme.inkColor};
  }
`;

export const GetWrapper = styled.div`
  position: relative;
  max-width: 860px;
  margin: 0 auto 14px;
  padding: 22px 26px 22px 30px;
  background-color: ${(props) => props.theme.cardColor};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  border-left: 8px solid ${(props) => props.theme.primaryColor};
  border-radius: 0;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;

  &:first-of-type {
    margin-top: 8px;
  }

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 8px 0 ${(props) => props.theme.inkColor};
  }

  @media (max-width: 920px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const GetId = styled.div`
  display: inline-block;
  font-family: ${(props) => props.theme.font.mono};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primaryLight};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  padding: 3px 9px;
  border-radius: 0;
  margin-bottom: 14px;
`;

export const GetTitle = styled.h2`
  font-family: ${(props) => props.theme.font.display};
  font-variation-settings:
    "wdth" 108,
    "wght" 700;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: -0.015em;
  line-height: 1.35;
  margin-bottom: 10px;
`;

export const GetBody = styled.p`
  font-size: 15px;
  line-height: 1.8;
  color: ${(props) => props.theme.subTextColor};
`;

// ---------- POST 실습 ----------
export const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1140px;
  margin: 52px auto 0;
  padding: 0 32px;
  gap: 32px;
  flex-wrap: wrap;
`;

export const PostInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 340px;
  max-width: 440px;
  padding: 30px 28px;
  background-color: ${(props) => props.theme.cardColor};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  border-radius: 0;
  box-shadow: 8px 8px 0 ${(props) => props.theme.inkColor};
`;

export const ContentInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 9px;
  margin-bottom: 22px;
  font-family: ${(props) => props.theme.font.mono};
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${(props) => props.theme.subTextColor};

  &:last-child {
    margin-bottom: 0;
  }

  textarea {
    flex: 1;
    min-height: 108px;
    padding: 13px 14px;
    margin-left: 0;
    font-family: ${(props) => props.theme.font.body};
    font-size: 15px;
    line-height: 1.65;
    text-transform: none;
    letter-spacing: normal;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor};
    border: 1.5px solid ${(props) => props.theme.borderColor};
    border-radius: 0;
    resize: vertical;
    outline: none;
    transition:
      box-shadow 0.16s ease,
      border-color 0.16s ease;

    &::placeholder {
      color: ${(props) => props.theme.subTextColor};
    }

    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      box-shadow: 4px 4px 0 ${(props) => props.theme.primaryColor};
    }
  }
`;

export const PostResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  flex: 1 1 340px;
  max-width: 440px;
  padding: 30px 28px;
  font-family: ${(props) => props.theme.font.mono};
  font-size: 13.5px;
  line-height: 1.7;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primaryLight};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  border-radius: 0;
  box-shadow: 8px 8px 0 ${(props) => props.theme.primaryColor};
  animation: risoRise 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) both;

  h2 {
    font-family: ${(props) => props.theme.font.display};
    font-variation-settings:
      "wdth" 108,
      "wght" 700;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: -0.01em;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1.5px solid ${(props) => props.theme.borderColor};
  }
`;

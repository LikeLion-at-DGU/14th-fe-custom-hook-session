import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NextStepWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1140px;
  margin: 20px auto 0;
  padding: 0 32px;
`;

const NextStepLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 0;
  font-family: ${(props) => props.theme.font.mono};
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.cardColor};
  border: 1.5px solid ${(props) => props.theme.borderColor};
  box-shadow: 4px 4px 0 ${(props) => props.theme.inkColor};
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.paperColor};

    transform: translate(4px, 4px);
    box-shadow: 0 0 0 ${(props) => props.theme.inkColor};
  }

  &:active {
    transform: translate(4px, 4px);
  }
`;

const NextStep = ({ to }) => {
  return (
    <NextStepWrapper>
      <NextStepLink to={to}>NEXT STEP →</NextStepLink>
    </NextStepWrapper>
  );
};

export default NextStep;

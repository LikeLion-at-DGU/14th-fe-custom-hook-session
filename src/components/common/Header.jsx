import { Link } from "react-router-dom";
import { styled } from "styled-components";
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 0 clamp(20px, 4vw, 44px);
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 2px solid ${(props) => props.theme.borderColor};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -9px;
    height: 7px;
    background-image: repeating-linear-gradient(
      -45deg,
      ${(props) => props.theme.primaryColor} 0 2px,
      transparent 2px 7px
    );
  }
`;

const LikeLionLogo = styled.img`
  width: 84px;
  height: auto;
  cursor: pointer;
  display: block;
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(-3deg) scale(1.04);
  }
`;

const HeaderTitle = styled.span`
  font-family: ${(props) => props.theme.font.mono};
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${(props) => props.theme.subTextColor};

  strong {
    color: ${(props) => props.theme.textColor};
    /* 브랜드 컬러 배경 위에 얹은 라벨 */
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.paperColor};
    padding: 4px 8px;
    margin-left: 6px;
    box-shadow: 3px 3px 0 ${(props) => props.theme.inkColor};
    display: inline-block;
  }

  @media (max-width: 520px) {
    font-size: 10.5px;
    letter-spacing: 0.12em;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LikeLionLogo src={DGULikeLion} alt="LikeLion_Logo" />
      </Link>
      <HeaderTitle>
        14th FE <strong>CUSTOM HOOK SESSION</strong>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

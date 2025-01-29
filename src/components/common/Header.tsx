import LogoIcon from "@assets/icons/logo.svg?react";
import styled, { keyframes } from "styled-components";
import MenuOpenIcon from "@assets/icons/menuOpen.svg?react";
import MenuClosedIcon from "@assets/icons/menuClosed.svg?react";
import useDMediaQuery from "@/hooks/useDMediaQuery";
import { useEffect, useState } from "react";
import { isMobile, isTablet } from "@/hooks/Media";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isDesktop } = useDMediaQuery();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <Container>
      <IconWrap onClick={() => navigate("/")}>
        <LogoIcon />
      </IconWrap>

      {isDesktop ? (
        <DesktopBtnWrap>
          <button onClick={() => navigate("/")}>Main</button>
          <button onClick={() => navigate("/service")}>Service</button>
          <button onClick={() => navigate("/help")}>Help</button>
        </DesktopBtnWrap>
      ) : (
        <BtnWrap>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MenuClosedIcon /> : <MenuOpenIcon />}
          </button>
          {isMenuOpen && (
            <MenuOpenWrap>
              <button onClick={() => navigate("/")}>Main</button>
              <button onClick={() => navigate("/service")}>Service</button>
              <button onClick={() => navigate("/help")}>Help</button>
            </MenuOpenWrap>
          )}
        </BtnWrap>
      )}
    </Container>
  );
};

export default Header;

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 222px 20px;

  ${isTablet} {
    padding: 24px;
  }

  ${isMobile} {
    padding: 24px;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export const IconWrap = styled.button`
  padding: 12px 48px;

  ${isTablet} {
    padding: 0px;

    > svg {
      transition: all 0.3s ease-in-out;
      width: 72.31px;
    }
  }

  ${isMobile} {
    padding: 0px;

    > svg {
      transition: all 0.3s ease-in-out;
      width: 72.31px;
    }
  }
`;

export const DesktopBtnWrap = styled.div`
  display: flex;
  gap: 24px;
  padding: 12px 16px;

  > button {
    padding: 8px 12px;
    font: var(--HeaderBigText);
    color: #ffffff;
  }
`;

export const BtnWrap = styled.div`
  position: relative;
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MenuOpenWrap = styled.div`
  position: absolute;
  right: 0;
  margin-top: 7.5px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: ${slideIn} 0.3s ease forwards;

  > button {
    margin-right: 2.7px;
    width: 71px;
    padding: 4.5px;
    background-color: #fff;
    border-radius: 900px;

    font: var(--HeaderSmallText);
    color: #000000;
  }
`;

import * as S from "@styles/HeaderStyle";
import LogoIcon from "@assets/icons/logo.svg?react";
import MenuOpenIcon from "@assets/icons/menuOpen.svg?react";
import MenuClosedIcon from "@assets/icons/menuClosed.svg?react";
import useDMediaQuery from "@/hooks/useDMediaQuery";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { isDesktop } = useDMediaQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsTransparent(true);
      return;
    }

    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <S.Container $isTransparent={isTransparent}>
      <S.IconWrap
        onClick={() => {
          navigate("/");
          setIsMenuOpen(false);
        }}
      >
        <LogoIcon />
      </S.IconWrap>

      {isDesktop ? (
        <S.DesktopBtnWrap>
          <button onClick={() => navigate("/")}>Main</button>
          <button onClick={() => navigate("/service")}>Service</button>
          <button onClick={() => navigate("/help")}>Help</button>
        </S.DesktopBtnWrap>
      ) : (
        <S.BtnWrap>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MenuClosedIcon /> : <MenuOpenIcon />}
          </button>
          {isMenuOpen && (
            <S.MenuOpenWrap>
              <button
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
              >
                Main
              </button>
              <button
                onClick={() => {
                  navigate("/service");
                  setIsMenuOpen(false);
                }}
              >
                Service
              </button>
              <button
                onClick={() => {
                  navigate("/help");
                  setIsMenuOpen(false);
                }}
              >
                Help
              </button>
            </S.MenuOpenWrap>
          )}
        </S.BtnWrap>
      )}
    </S.Container>
  );
};

export default Header;

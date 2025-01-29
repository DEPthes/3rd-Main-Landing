import * as S from "@styles/LayoutStyle";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <S.LayoutContainer>
      <S.HeaderWrap>
        <Header />
      </S.HeaderWrap>
      <S.Main>{children}</S.Main>
      {location.pathname !== "/" && (
        <S.FooterWrap>
          <Footer />
        </S.FooterWrap>
      )}
    </S.LayoutContainer>
  );
};

export default Layout;

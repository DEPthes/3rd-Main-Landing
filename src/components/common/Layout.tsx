import * as S from "@styles/LayoutStyle";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const location = useLocation();

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

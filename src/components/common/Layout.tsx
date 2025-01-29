import * as S from "@styles/LayoutStyle";
import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Container>
      <S.HeaderWrap>
        <Header />
      </S.HeaderWrap>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default Layout;

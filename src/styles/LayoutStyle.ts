import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
`;

export const Main = styled.main`
  flex: 1;
  flex-grow: 1;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;
export const FooterWrap = styled.footer`
  width: 100%;
`;

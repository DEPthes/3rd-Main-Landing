import { isTablet, isMobile } from "@/hooks/Media";
import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 64px 64px 120px;
  gap: 32px;

  ${isTablet} {
    padding: 24px;
    gap: 10px;
  }

  ${isMobile} {
    padding: 24px;
    gap: 10px;
  }

  > svg {
    margin-left: -5px;
  }
`;

export const LinkWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 50px;

  ${isTablet} {
    gap: 9.5px;
  }

  ${isMobile} {
    gap: 9.5px;
  }

  > button {
    display: inline-flex;
    align-items: center;
    gap: 3px;

    > span {
      font: var(--FooterText);
      color: #fff;
    }
  }

  > a {
    font: var(--FooterText);
    color: #fff;
    flex-shrink: 0;
  }
`;

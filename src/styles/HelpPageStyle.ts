import { isMobile, isTablet } from "@/hooks/Media";
import styled from "styled-components";

export const Container = styled.div<{ $isLoaded: boolean }>`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 228px 270.57px 80.22px;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};

  ${isTablet} {
    padding: 150px 50px 100px;
  }

  ${isMobile} {
    padding: 94px 16px 142.87px;
  }

  > h2 {
    transition: all 0.3s ease-in-out;
    font: var(--HelpBigText);
    color: #fff;
    padding-bottom: 32.2px;
    border-bottom: 1.86px solid #fff;

    ${isTablet} {
      font: var(--HelpMediumText);
      padding-bottom: 20px;
      border-bottom: 1px solid #fff;
      margin-bottom: 32px;
    }

    ${isMobile} {
      font: var(--HelpSmallText);
      padding-bottom: 8.08px;
      border-bottom: 0.47px solid #fff;
      margin-bottom: 32px;
    }
  }

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    bottom: 0;
    left: 0;
    z-index: -2;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  padding-bottom: 116.7%;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

import { isMobile, isTablet } from "@/hooks/Media";
import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 228px 270.57px 80.22px;

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
`;

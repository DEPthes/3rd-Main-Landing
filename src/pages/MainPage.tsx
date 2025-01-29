import { isMobile, isTablet } from "@/hooks/Media";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TextWrap>
        <h2>DEPth 3rd</h2>
        <h1>MAIN PROJECT</h1>
      </TextWrap>
      <GradientButton onClick={() => navigate("/service")}>
        <span>프로젝트 둘러보기</span>
      </GradientButton>
    </Container>
  );
};

export default MainPage;

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  gap: 43px;

  ${isTablet} {
    gap: 20px;
  }

  ${isMobile} {
    gap: 30px;
  }
`;

export const TextWrap = styled.div`
  transition: all 0.3s ease-in-out;
  text-align: center;

  > h1 {
    color: #fff;
    font: var(--MainBigText1);

    ${isTablet} {
      font: var(--MainMediumText1);
    }

    ${isMobile} {
      font: var(--MainSmallText1);
    }
  }

  > h2 {
    color: #fff;
    font: var(--MainBigText2);

    ${isTablet} {
      font: var(--MainMediumText2);
    }

    ${isMobile} {
      font: var(--MainSmallText2);
    }
  }
`;

export const GradientButton = styled.button`
  transition: all 0.3s ease-in-out;
  position: relative;
  background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
  width: 214px;
  height: 77px;
  border-radius: 13px;
  z-index: 1;

  ${isTablet} {
    width: 100px;
    height: 36px;
    border-radius: 6.44px;
  }

  ${isMobile} {
    width: 104px;
    height: 37px;
    border-radius: 6.66px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.47) 0%,
      rgba(255, 255, 255, 0.55) 45%,
      rgba(255, 255, 255, 0.39) 100%
    );
    border-radius: 13px;
    z-index: -1;

    ${isTablet} {
      border-radius: 6.44px;
    }

    ${isMobile} {
      border-radius: 6.66px;
    }
  }

  > span {
    transition: all 0.3s ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
    font: var(--MainBigBtnText);
    color: #fff;
    width: 211px;
    height: 74px;
    border-radius: 12.5px;
    z-index: 1;

    ${isTablet} {
      font: var(--MainMediumBtnText);
      width: 98px;
      height: 34px;
      border-radius: 5.9px;
    }

    ${isMobile} {
      font: var(--MainSmallBtnText);
      width: 101.5px;
      height: 34.5px;
      border-radius: 6px;
    }
  }
`;

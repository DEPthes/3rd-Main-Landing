import * as S from "@styles/MainPageStyle";
import { useNavigate } from "react-router-dom";
import MainBgImage from "@assets/images/background/mainBg.png";
import mainBgMobileImage from "@assets/images/background/mainBgMobile.png";
import GlassImage from "@assets/images/background/glass.png";
import useDMediaQuery from "@/hooks/useDMediaQuery";

const MainPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useDMediaQuery();

  return (
    <S.Container>
      <S.TextWrap>
        <img src={GlassImage} />
        <h2>DEPth 3rd</h2>
        <h1>MAIN PROJECT</h1>
      </S.TextWrap>
      <S.GradientButton onClick={() => navigate("/service")}>
        <span>프로젝트 둘러보기</span>
      </S.GradientButton>
      {isMobile ? <img src={mainBgMobileImage} /> : <img src={MainBgImage} />}
    </S.Container>
  );
};

export default MainPage;

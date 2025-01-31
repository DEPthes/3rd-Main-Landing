import * as S from "@styles/MainPageStyle";
import { useNavigate } from "react-router-dom";
import MainBgImage from "@assets/images/background/mainBg.png";
import MainBgMobileImage from "@assets/images/background/mainBgMobile.png";
import GlassImage from "@assets/images/background/glass.png";
import useDMediaQuery from "@/hooks/useDMediaQuery";
import { useEffect, useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useDMediaQuery();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();

    img1.src = MainBgImage;
    img2.src = MainBgMobileImage;

    img1.onload = handleImageLoad;
    img2.onload = handleImageLoad;

    return () => {
      img1.onload = null;
      img2.onload = null;
    };
  }, []);

  return (
    <S.Container $isLoaded={isImageLoaded}>
      <S.TextWrap>
        <img src={GlassImage} alt="배경" />
        <h2>DEPth 3rd</h2>
        <h1>MAIN PROJECT</h1>
      </S.TextWrap>
      <S.GradientButton onClick={() => navigate("/service")}>
        <span>프로젝트 둘러보기</span>
      </S.GradientButton>
      <img
        src={isMobile ? MainBgMobileImage : MainBgImage}
        alt="배경"
        onLoad={handleImageLoad}
      />
    </S.Container>
  );
};

export default MainPage;

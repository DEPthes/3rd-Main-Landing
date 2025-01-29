import * as S from "@styles/HelpPageStyle";
import FloorPlanImage from "@assets/images/floorPlan.png";
import HelpBgImage from "@assets/images/background/helpBg.png";
import helpBgMobileImage from "@assets/images/background/helpBgMobile.png";
import useDMediaQuery from "@/hooks/useDMediaQuery";

const HelpPage = () => {
  const { isDesktop } = useDMediaQuery();

  return (
    <S.Container>
      <h2>부스 배치도</h2>
      <S.ImageWrap>
        <img src={FloorPlanImage} alt="부스 배치도" />
      </S.ImageWrap>
      {isDesktop ? <img src={HelpBgImage} /> : <img src={helpBgMobileImage} />}
    </S.Container>
  );
};

export default HelpPage;

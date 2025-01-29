import * as S from "@styles/MainPageStyle";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TextWrap>
        <h2>DEPth 3rd</h2>
        <h1>MAIN PROJECT</h1>
      </S.TextWrap>
      <S.GradientButton onClick={() => navigate("/service")}>
        <span>프로젝트 둘러보기</span>
      </S.GradientButton>
    </S.Container>
  );
};

export default MainPage;

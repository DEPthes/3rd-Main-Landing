import * as S from "@styles/ServicePageStyle";
import { Service } from "@/constants/service";
import RightCaretIcon from "@assets/icons/rightCaret.svg?react";
import { useNavigate } from "react-router-dom";
import GreenBgImage from "@assets/images/background/green.svg?react";
import OrangeBgImage from "@assets/images/background/orange.svg?react";
import GreenMobileBgImage from "@assets/images/background/greenMobile.svg?react";
import OrangeMobileBgImage from "@assets/images/background/orangeMobile.svg?react";
import useDMediaQuery from "@/hooks/useDMediaQuery";
import { useState } from "react";

const ServicePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useDMediaQuery();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = Service.length;

  const handleImageLoad = () => {
    setImagesLoaded((prevLoaded) => prevLoaded + 1);
  };

  return (
    <S.Container $isLoaded={imagesLoaded >= totalImages}>
      <h1>Do Evolve Potential in-DEPth</h1>
      <S.ItemWrap>
        {Service.map((data) => {
          return (
            <S.ServiceItem
              key={data.id}
              onClick={() => navigate(`/service/${data.id}`)}
            >
              <S.ServiceTopWrap>
                <img
                  src={data.image}
                  alt={data.title}
                  onLoad={handleImageLoad}
                />
                <h3>{data.title}</h3>
                <p>{data.content}</p>
              </S.ServiceTopWrap>
              <button>
                프로젝트 보러가기
                <RightCaretIcon />
              </button>
            </S.ServiceItem>
          );
        })}
      </S.ItemWrap>
      {isMobile ? (
        <>
          <OrangeMobileBgImage
            style={{
              position: "fixed",
              top: "-30%",
              left: "-90%",
              zIndex: -2,
            }}
          />
          <GreenMobileBgImage
            style={{
              position: "fixed",
              right: "-110%",
              zIndex: -2,
            }}
          />
        </>
      ) : (
        <>
          <GreenBgImage
            style={{
              position: "fixed",
              top: "-30%",
              right: "-35%",
              zIndex: -2,
            }}
            width="80%"
          />
          <OrangeBgImage
            style={{
              position: "fixed",
              bottom: "-20%",
              left: "-23%",
              zIndex: -2,
            }}
            width="50%"
          />
        </>
      )}
    </S.Container>
  );
};

export default ServicePage;

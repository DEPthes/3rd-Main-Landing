import styled from "styled-components";
import { isMobile, isTablet } from "@/hooks/Media";
import { Service } from "@/constants/service";
import RightCaretIcon from "@assets/icons/rightCaret.svg?react";
import { useNavigate } from "react-router-dom";
import GreenBgImage from "@assets/images/background/green.svg?react";
import OrangeBgImage from "@assets/images/background/orange.svg?react";
import GreenMobileBgImage from "@assets/images/background/greenMobile.svg?react";
import OrangeMobileBgImage from "@assets/images/background/orangeMobile.svg?react";
import useDMediaQuery from "@/hooks/useDMediaQuery";

const ServicePage = () => {
  const navigate = useNavigate();
  const { isMobile } = useDMediaQuery();

  return (
    <Container>
      <h1>Do Evolve Potential in-DEPth</h1>
      <ItemWrap>
        {Service.map((data) => {
          return (
            <ServiceItem
              key={data.id}
              onClick={() => navigate(`/service/${data.id}`)}
            >
              <ServiceTopWrap>
                <img src={data.image} alt={data.title} />
                <h3>{data.title}</h3>
                <p>{data.content}</p>
              </ServiceTopWrap>
              <button>
                프로젝트 보러가기
                <RightCaretIcon />
              </button>
            </ServiceItem>
          );
        })}
      </ItemWrap>
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
    </Container>
  );
};

export default ServicePage;

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 196px;
  margin-bottom: 80px;
  padding: 0 11px 31px;

  ${isTablet} {
    margin-top: 100px;
    margin-bottom: 62px;
  }

  ${isMobile} {
    margin-top: 78px;
    margin-bottom: 62px;
  }

  > h1 {
    transition: all 0.3s ease-in-out;
    text-align: center;
    padding: 64px;
    font: var(--ServiceBigText);
    color: rgba(255, 255, 255, 0.9);

    ${isTablet} {
      padding: 40px 0;
      font: var(--ServiceSmallText);
    }

    ${isMobile} {
      padding: 24px 0;
      font: var(--ServiceSmallText);
    }
  }
`;

export const ItemWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 64px;
  gap: 30px;
  justify-items: center;

  @media (min-width: 1136px) and (max-width: 1799px) {
    gap: 60px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 830px) and (max-width: 1135px) {
    padding: 16px;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 600px) and (max-width: 829px) {
    padding: 16px;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 370px) and (max-width: 599px) {
    padding: 16px;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 369px) {
    padding: 16px;
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ServiceItem = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 11px 65px;
  width: 420px;
  height: 553px;
  border: 1px solid #6d6d6d;
  border-radius: 10px;
  cursor: pointer;

  ${isTablet} {
    padding: 4.49px 4.49px 22px;
    width: 171.36px;
    height: 225.63px;
    border: 0.41px solid #6d6d6d;
    border-radius: 4.08px;
  }

  ${isMobile} {
    padding: 4.49px 4.49px 22px;
    width: 171.36px;
    height: 225.63px;
    border: 0.41px solid #6d6d6d;
    border-radius: 4.08px;
  }

  > button {
    transition: all 0.3s ease-in-out;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    font: var(--ItemContentBigText);

    ${isTablet} {
      gap: 2.04px;
      font: var(--ItemContentSmallText);
    }

    ${isMobile} {
      gap: 2.04px;
      font: var(--ItemContentSmallText);
    }

    > svg {
      transition: all 0.3s ease-in-out;
      ${isTablet} {
        width: 10px;
        height: 10px;
      }

      ${isMobile} {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

export const ServiceTopWrap = styled.div`
  > img {
    transition: all 0.3s ease-in-out;
    width: 100%;
    border-radius: 10px;

    ${isTablet} {
      border-radius: 4.08px;
    }

    ${isMobile} {
      border-radius: 4.08px;
    }
  }

  > h3 {
    transition: all 0.3s ease-in-out;
    color: #fff;
    margin-top: 36px;
    font: var(--ItemTitleBigText);

    ${isTablet} {
      margin-top: 14.69px;
      font: var(--ItemTitleSmallText);
    }

    ${isMobile} {
      margin-top: 14.69px;
      font: var(--ItemTitleSmallText);
    }
  }

  > p {
    transition: all 0.3s ease-in-out;
    color: #d1cfcf;
    margin-top: 9px;
    font: var(--ItemContentBigText);

    ${isTablet} {
      margin-top: 3.67px;
      font: var(--ItemContentSmallText);
    }

    ${isMobile} {
      margin-top: 3.67px;
      font: var(--ItemContentSmallText);
    }
  }
`;

import styled from "styled-components";
import { isTablet, isMobile } from "@/hooks/Media";
import { useParams } from "react-router-dom";
import { ServiceDetailImages } from "@constants/service";
import { useState } from "react";
import { BounceDot } from "basic-loading";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      {isLoading && (
        <Loading>
          <Loading>
            <BounceDot option={{ size: 15, color: "#fff" }} />
          </Loading>
        </Loading>
      )}
      {id && (
        <img
          src={ServiceDetailImages[id]}
          alt="상세이미지"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      )}
    </Container>
  );
};

export default ServiceDetailPage;

export const Container = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  margin-top: 147px;

  ${isTablet} {
    margin-top: 78px;
  }

  ${isMobile} {
    margin-top: 78px;
  }

  > img {
    width: 100%;
  }
`;

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

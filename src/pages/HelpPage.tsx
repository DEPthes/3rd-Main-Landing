import { Container } from "@styles/HelpPageStyle";
import FloorPlanImage from "@assets/images/floorPlan.png";

const HelpPage = () => {
  return (
    <Container>
      <h2>부스 배치도</h2>
      <img src={FloorPlanImage} alt="부스 배치도" width="100%" />
    </Container>
  );
};

export default HelpPage;

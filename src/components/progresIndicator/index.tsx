// styles
import { ProgresIndicatorContainer, ProgresIndicatorProgress } from "./styles";

const ProgresIndicator = ({ progress }: { progress: number }) => {
  return (
    <ProgresIndicatorContainer>
      <ProgresIndicatorProgress progress={progress} />
    </ProgresIndicatorContainer>
  );
};

export default ProgresIndicator;

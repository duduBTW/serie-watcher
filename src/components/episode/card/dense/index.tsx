import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import { RootStackParamList } from "../../../../../App";

// styles
import Typography from "../../../typography";
import {
  EpisodeCardDenseContainer,
  EpisodeMiniature,
  EpisodeInfo,
} from "./styles";

const EpisodeCardDense = ({
  miniature,
  number,
  id,
  progress,
  episodeUrl,
}: {
  id: string;
  number: number;
  miniature: string;
  progress: number;
  episodeUrl: string;
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Episode", {
          episodeId: id,
          episodeUrl,
        });
      }}
    >
      <EpisodeCardDenseContainer>
        <EpisodeMiniature
          source={{
            uri: miniature,
          }}
          resizeMode="cover"
        />
        <EpisodeInfo>
          <Typography color="text.white" variant="title-04">
            Episode {number}
          </Typography>

          {progress > 0 && (
            <Typography color="primary.main" variant="subtitle-02">
              {progress === 100 ? "Completed" : `${progress}%`}
            </Typography>
          )}
        </EpisodeInfo>
      </EpisodeCardDenseContainer>
    </TouchableWithoutFeedback>
  );
};

export default EpisodeCardDense;

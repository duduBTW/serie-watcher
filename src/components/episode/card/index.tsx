import { Serie } from "../../../service/serie";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import { RootStackParamList } from "../../../../App";
import { useWindowDimensions } from "react-native";

// styles
import {
  EpisodeCardContainer,
  BackgroundImage,
  EpisodeContent,
  ShowName,
  Episode,
  Spacer,
} from "./styles";
import ProgresIndicator from "../../progresIndicator";

const EpisodeCard = ({
  miniature,
  serie,
  season,
  title,
  progress,
  id,
  episodeUrl,
}: {
  id: string;
  miniature: string;
  title: string;
  season: string;
  serie: Partial<Serie>;
  progress: number;
  episodeUrl: string;
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { width } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Episode", {
          episodeId: id,
          episodeUrl,
        });
      }}
    >
      <EpisodeCardContainer width={width}>
        <BackgroundImage
          source={{
            uri: miniature,
          }}
        />
        <EpisodeContent>
          <ShowName>{serie.title}</ShowName>
          <Episode>
            Season {season} - Episode {title}
          </Episode>
          <Spacer />
          <ProgresIndicator progress={progress} />
        </EpisodeContent>
      </EpisodeCardContainer>
    </TouchableWithoutFeedback>
  );
};

export default EpisodeCard;

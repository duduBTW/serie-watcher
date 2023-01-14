import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";

// components
import { RefreshControl, TouchableWithoutFeedback } from "react-native";
import { FlatGrid, FlatGridProps } from "react-native-super-grid";
import ProgresIndicator from "../../progresIndicator";
import SizedBox from "../../sizedBox";
import Typography from "../../typography";

// styles
import {
  EpisodeGridContainer,
  EpisodeCardContainer,
  EpisodeCardMiniatureContainer,
  EpisodeCardMiniature,
  EpisodeInfo,
} from "./styles";

interface Props extends Partial<FlatGridProps> {
  title?: string;
  refreshing?: boolean;
  onRefresh?: () => void;
  episodes: {
    id: string;
    miniature: string;
    progress: number;
    episodeUrl: string;
  }[];
}

const EpisodeGrid = ({
  title,
  episodes,
  onRefresh,
  refreshing = false,
  ...rest
}: Props) => {
  return (
    <EpisodeGridContainer>
      {title && (
        <>
          <Typography variant="title-03">{title}</Typography>
          <SizedBox height={16} />
        </>
      )}
      <FlatGrid
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        {...rest}
        spacing={16}
        nestedScrollEnabled
        itemDimension={160}
        data={episodes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EpisodeCard {...item} />}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </EpisodeGridContainer>
  );
};

const EpisodeCard = ({
  miniature,
  progress,
  episodeUrl,
  serie,
  number,
  id,
}: {
  id: string;
  miniature: string;
  episodeUrl: string;
  progress: number;
  number: number;
  serie: {
    title: string;
    season: number;
    id: string;
  };
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
      <EpisodeCardContainer>
        <EpisodeCardMiniatureContainer>
          <EpisodeCardMiniature
            source={{
              uri: miniature,
            }}
          />
        </EpisodeCardMiniatureContainer>
        <EpisodeInfo>
          <Typography variant="subtitle-02" color="text.white">
            {serie.title}
          </Typography>
          <SizedBox height={4} />
          <Typography variant="title-04" color="text.white">
            S{serie.season} - Episode {number}
          </Typography>
          <SizedBox height={8} />
          <ProgresIndicator progress={progress} />
        </EpisodeInfo>
      </EpisodeCardContainer>
    </TouchableWithoutFeedback>
  );
};

export default EpisodeGrid;

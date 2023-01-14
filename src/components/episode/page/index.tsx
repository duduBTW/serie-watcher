import service from "../../../service";
import { RefreshControl, useWindowDimensions } from "react-native";
import { RootStackParamList } from "../../../../App";
import { RouteProp, useRoute } from "@react-navigation/native";

// components
import DividerContent from "../../divider/styles";
import Typography from "../../typography";
import EpisodeCardDense from "../card/dense";
import SizedBox from "../../sizedBox";
import { Video } from "expo-av";

// styles
import {
  EpisodePageContainer,
  EpisodePageScroll,
  VideoContainer,
  VideoNotFoundContainer,
  VideoNotFoundImage,
  VideoNotFoundImageContainer,
} from "./styles";

const useEpisodePage = () => {
  const {
    params: { episodeId, ...placeholderData },
  } = useRoute<RouteProp<RootStackParamList, "Episode">>();

  return service.useEpisode(episodeId, {
    refetchOnMount: false,
    placeholderData,
  });
};

const EpisodePage = () => {
  const {
    data: episode,
    error,
    refetch,
    isRefetching,
    isLoading,
  } = useEpisodePage();

  if (error || !episode) return <VideoNotFound />;

  return (
    <EpisodePageScroll
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    >
      <EpisodePageContainer>
        <VideoPlayer />
        {!isLoading && <EpisodeContent />}
      </EpisodePageContainer>
    </EpisodePageScroll>
  );
};

const VideoPlayer = () => {
  const { data: episode } = useEpisodePage();
  const { width } = useWindowDimensions();

  return (
    <VideoContainer key={episode?.episodeUrl}>
      {episode?.episodeUrl && (
        <Video
          source={{
            uri: episode.episodeUrl,
          }}
          useNativeControls
          isLooping
          style={{
            width,
            // 16:9
            height: (width / 100) * 56.25,
          }}
          // @ts-ignore
          resizeMode="contain"
        />
      )}
    </VideoContainer>
  );
};

const EpisodeContent = () => {
  const { data: episode } = useEpisodePage();
  const { width } = useWindowDimensions();

  if (!episode?.number) return <></>;
  return (
    <>
      <Typography color="primary.main" variant="subtitle-01">
        {episode.serie?.title}
      </Typography>
      <SizedBox height={4} />
      <Typography variant="title-02">Episode {episode.number}</Typography>
      <SizedBox height={8} />
      <Typography variant="body-01">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <DividerContent width={width} />
      {episode.next && (
        <>
          <Typography variant="title-03">Next episode</Typography>
          <EpisodeCardDense {...episode.next} />
        </>
      )}
    </>
  );
};

const VideoNotFound = () => {
  return (
    <VideoNotFoundContainer>
      <Typography color="primary.main" variant="title-01">
        Video não encontrado
      </Typography>
      <VideoNotFoundImageContainer>
        <VideoNotFoundImage
          source={{
            uri: "https://c.tenor.com/NiK2MFhuLa0AAAAC/anime-confused.gif",
          }}
        />
      </VideoNotFoundImageContainer>
    </VideoNotFoundContainer>
  );
};

export default EpisodePage;

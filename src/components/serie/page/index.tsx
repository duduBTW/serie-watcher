import service from "../../../service";
import { RootStackParamList } from "../../../../App";
import { RouteProp, useRoute } from "@react-navigation/native";

// styles
import { SeriePageScroll, SeriePageContainer, SerieMiniature } from "./styles";

// components
import { View, RefreshControl } from "react-native";
import Typography from "../../typography";
import EpisodeCardDense from "../../episode/card/dense";
import Divider from "../../divider";
import SizedBox from "../../sizedBox";

const useSeriePage = () => {
  const {
    params: { serieId, ...placeholderData },
  } = useRoute<RouteProp<RootStackParamList, "Serie">>();

  return service.useSerie(serieId, {
    refetchOnMount: false,
    placeholderData,
  });
};

const SeriePage = () => {
  const { error, refetch, isRefetching } = useSeriePage();

  return (
    <SeriePageScroll
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    >
      <SeriePageContainer>
        {!error ? <SerieHeader /> : <SerieNotFound />}
        <Divider />
        <SerieEpisodeList />
      </SeriePageContainer>
    </SeriePageScroll>
  );
};

const SerieEpisodeList = () => {
  const { data } = useSeriePage();
  const seasons = data?.seasons;

  if (seasons)
    return (
      <>
        <Typography variant="title-03">Episodes</Typography>
        {Object.entries(seasons).map(([season, episodes]) => (
          <View key={season}>
            <SizedBox height={16} />
            <Typography variant="subtitle-01">Season {season}</Typography>
            {episodes.map((episode) => (
              <EpisodeCardDense key={episode.id} {...episode} />
            ))}
          </View>
        ))}
      </>
    );

  return <></>;
};

const SerieHeader = () => {
  const { data: serie } = useSeriePage();

  return (
    <>
      <SerieMiniature
        source={{
          uri: serie?.miniature,
        }}
      />
      {serie?.title && (
        <>
          <SizedBox height={12} />
          <Typography variant="title-02">{serie.title}</Typography>
        </>
      )}
      <SizedBox height={4} />
      {serie?.description && (
        <Typography variant="body-01" color="text.blackSecondary">
          {serie.description}
        </Typography>
      )}
    </>
  );
};

const SerieNotFound = () => {
  return (
    <>
      <SerieMiniature
        source={{
          uri: "https://i.imgur.com/B2E0TThh.jpg",
        }}
      />
      <SizedBox height={12} />
      <Typography variant="title-02">Serie not found</Typography>
      <Typography variant="title-01" color="primary.main">
        404
      </Typography>
    </>
  );
};

export default SeriePage;

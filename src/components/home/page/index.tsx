import { Props } from "../../../../App";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../App";
import { Episode } from "../../../service/episode";
import { useTheme } from "styled-components";
import service from "../../../service";

// components
import { FlatList, TouchableWithoutFeedback, View } from "react-native";
import Typography from "../../typography";
import SvgSearch from "../../../assets/icons/search";
import SvgBookMark from "../../../assets/icons/bookmark";
import SvgGrid from "../../../assets/icons/grid";
import EpisodeCard from "../../episode/card";
import SerieList from "../../serie/list";

// styles
import {
  HomePageContainer,
  HeaderContainer,
  ProfilePicture,
  ContinueWatchingContainer,
  Title,
  NavegationContainer,
  NavegationItemContainer,
  NavegationItemIndicator,
  HomePageScroll,
  NavegationItemTitle,
  HomeLoadingContaienr,
  HomeLoadingImage,
} from "./styles";

const HomePage = ({}: Props) => {
  const { data, isLoading, error } = service.useHome();

  if (isLoading) return <HomeLoading />;
  if (error || !data) return <Typography>Error :(</Typography>;
  return (
    <HomePageContainer>
      <HomePageScroll>
        <HomeHeader />
        {data.continue && data.continue.length > 0 && (
          <ContinueWatching episodes={data.continue} />
        )}
        <Navegation />
        {data.list && data.list.length > 0 && (
          <SerieList title="Your list" series={data.list} />
        )}
        {data.popular && data.popular.length > 0 && (
          <SerieList title="Most popular" series={data.popular} />
        )}
        {data.new && data.new.length > 0 && (
          <SerieList title="New" series={data.new} />
        )}
      </HomePageScroll>
    </HomePageContainer>
  );
};

const HomeLoading = () => {
  return (
    <HomeLoadingContaienr>
      <HomeLoadingImage
        resizeMode="contain"
        source={{
          uri: "https://pbs.twimg.com/media/FZseCZ3aQAAwZzs?format=jpg&name=medium",
        }}
      />
      <Typography>Loading...</Typography>
    </HomeLoadingContaienr>
  );
};

const HomeHeader = () => {
  const { color } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <HeaderContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("User");
        }}
      >
        <ProfilePicture
          source={{
            uri: "https://pbs.twimg.com/profile_images/1451192693015470103/2n98yG6o_400x400.jpg",
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <View>
          <SvgSearch color={color.text.black} />
        </View>
      </TouchableWithoutFeedback>
    </HeaderContainer>
  );
};

const ContinueWatching = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <ContinueWatchingContainer>
      <Title>Continue watching</Title>
      <FlatList
        horizontal
        data={episodes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EpisodeCard {...item} />}
        contentContainerStyle={{
          paddingLeft: 4,
          paddingRight: 16,
          paddingBottom: 12,
        }}
      />
    </ContinueWatchingContainer>
  );
};

const navegationRoutes = [
  {
    label: "My list",
    route: "MyList",
    icon: SvgBookMark,
  },
  {
    label: "Catalog",
    route: "Search",
    icon: SvgGrid,
  },
] as const;

const Navegation = () => {
  return (
    <NavegationContainer>
      <FlatList
        horizontal
        data={navegationRoutes}
        keyExtractor={(item) => item.route}
        renderItem={({ item }) => <NavegationItem {...item} />}
        contentContainerStyle={{
          paddingLeft: 4,
          paddingRight: 16,
          paddingBottom: 32,
        }}
      />
    </NavegationContainer>
  );
};

const NavegationItem = ({
  icon: Icon,
  label,
  route,
}: {
  label: string;
  route: keyof RootStackParamList;
  icon: ({ color }: { color: string }) => JSX.Element;
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { color } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(route)}>
      <NavegationItemContainer>
        <NavegationItemIndicator>
          <Icon color={color.text.white} />
        </NavegationItemIndicator>
        <NavegationItemTitle>{label}</NavegationItemTitle>
      </NavegationItemContainer>
    </TouchableWithoutFeedback>
  );
};

export default HomePage;

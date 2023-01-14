import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import { RootStackParamList } from "../../../../App";
import { useWindowDimensions } from "react-native";

// styles
import {
  SerieCardContainer,
  SerieMiniature,
  SerieMiniatureContainer,
  SerieInfo,
} from "./styles";
import Typography from "../../typography";

const SerieCard = ({
  miniature,
  title,
  id,
  responsive = false,
}: {
  id: string;
  miniature: string;
  responsive?: boolean;
  title: string;
}) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Serie", {
          serieId: id,
          miniature,
          title,
        });
      }}
    >
      <SerieCardContainer width={width} responsive={responsive}>
        <SerieMiniatureContainer>
          <SerieMiniature
            source={{
              uri: miniature,
            }}
            resizeMode="cover"
          />
        </SerieMiniatureContainer>
        <SerieInfo>
          <Typography
            numberOfLines={1}
            ellipsizeMode="tail"
            variant="subtitle-02"
            color="text.white"
          >
            {title}
          </Typography>
        </SerieInfo>
      </SerieCardContainer>
    </TouchableWithoutFeedback>
  );
};

export default SerieCard;

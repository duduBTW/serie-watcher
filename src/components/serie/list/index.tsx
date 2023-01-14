import { Serie } from "../../../service/serie";

// components
import { FlatList } from "react-native";
import SizedBox from "../../sizedBox";
import Typography from "../../typography";
import SerieCard from "../card";

// styles
import { SerieListContainer } from "./styles";

const SerieList = ({ title, series }: { title: string; series: Serie[] }) => {
  return (
    <SerieListContainer>
      <Typography ml={16} variant="title-03">
        {title}
      </Typography>
      <SizedBox height={16} />
      <FlatList
        horizontal
        data={series}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SerieCard {...item} />}
        contentContainerStyle={{
          paddingLeft: 4,
          paddingRight: 16,
          paddingBottom: 12,
        }}
      />
    </SerieListContainer>
  );
};

export default SerieList;

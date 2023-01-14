// components
import { RefreshControl } from "react-native";
import { FlatGrid, FlatGridProps } from "react-native-super-grid";
import SizedBox from "../../sizedBox";
import Typography from "../../typography";
import SerieCard from "../card";

// styles
import { SerieGridContainer } from "./styles";

interface Props extends Partial<FlatGridProps> {
  gridKey?: string;
  title?: string;
  loading?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  series: {
    id: string;
    title: string;
    miniature: string;
  }[];
}

const SerieGrid = ({
  title,
  series,
  loading,
  onRefresh,
  gridKey,
  refreshing = false,
  ...rest
}: Props) => {
  return (
    <SerieGridContainer>
      {title && (
        <>
          <Typography variant="title-03">{title}</Typography>
          <SizedBox height={16} />
        </>
      )}
      <FlatGrid
        key={gridKey}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        {...rest}
        spacing={16}
        nestedScrollEnabled
        itemDimension={160}
        data={series}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SerieCard responsive {...item} />}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </SerieGridContainer>
  );
};

export default SerieGrid;

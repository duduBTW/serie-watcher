import debounce from "lodash.debounce";
import { useMemo, useState } from "react";
import service from "../../../service";

// components
import SerieGrid from "../../serie/grid";

// styles
import {
  SearchInputBase,
  SearchInputContainer,
  SearchPageContainer,
} from "./styles";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: series,
    isRefetching,
    isLoading,
  } = service.useSerieSearch(searchTerm);

  const onChangeText = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, 100),
    []
  );

  return (
    <SearchPageContainer>
      <SearchInput onChangeText={onChangeText} />
      <SerieGrid
        gridKey={searchTerm}
        loading={isRefetching || isLoading}
        series={series ?? []}
      />
    </SearchPageContainer>
  );
};

const SearchInput = ({
  onChangeText,
}: {
  onChangeText: (value: string) => void;
}) => {
  return (
    <SearchInputContainer>
      <SearchInputBase onChangeText={onChangeText} placeholder="Search..." />
    </SearchInputContainer>
  );
};

export default SearchPage;

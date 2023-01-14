import { useState, useMemo } from "react";
import service from "../../../service";

// components
import EpisodeGrid from "../../episode/grid";
import SerieGrid from "../../serie/grid";

// styles
import {
  MyListPageContainer,
  TabItem,
  TabItemLabel,
  TabsContainer,
} from "./style";
export type ValuesOf<T extends any[]> = T[number];

export type TabVariamt = "contained" | "outlined";
const tabs = ["Updates", "My library"];

const MyListPage = () => {
  const [selectedTab, setSelectedTab] = useState<ValuesOf<typeof tabs>>(
    tabs[0]
  );
  const content = useMemo(() => {
    const tabsContent = [<MyListUpdates />, <MyListLibrary />];

    return tabsContent[tabs.indexOf(selectedTab)];
  }, [selectedTab]);

  return (
    <MyListPageContainer>
      <TabsContainer>
        {tabs.map((tab) => {
          const selected = selectedTab === tab;

          return (
            <TabItem
              onPress={() => setSelectedTab(tab)}
              key={tab}
              variant={selected ? "contained" : "outlined"}
            >
              <TabItemLabel variant={selected ? "contained" : "outlined"}>
                {tab}
              </TabItemLabel>
            </TabItem>
          );
        })}
      </TabsContainer>
      {content}
    </MyListPageContainer>
  );
};

const MyListUpdates = () => {
  const {
    data: episodes,
    refetch,
    isRefetching,
  } = service.useEpisodeUpdates({
    refetchOnMount: false,
  });

  return (
    <EpisodeGrid
      refreshing={isRefetching}
      onRefresh={refetch}
      episodes={episodes ?? []}
    />
  );
};

const MyListLibrary = () => {
  const {
    data: series,
    refetch,
    isRefetching,
  } = service.useSerieLibrary({
    refetchOnMount: false,
  });

  return (
    <SerieGrid
      refreshing={isRefetching}
      onRefresh={refetch}
      series={series ?? []}
    />
  );
};

export default MyListPage;

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { z } from "zod";
import { sleep } from "../utils/sleep";
import { Serie } from "./serie";

export interface Episode {
  id: string;
  miniature: string;
  title: string;
  season: string;
  serie: Partial<Serie>;
  progress: number;
  episodeUrl: string;
}

const episodeSerie = z.object({
  id: z.string(),
  title: z.string(),
  season: z.number(),
});

export const episodeMiniatureSchema = z.object({
  id: z.string(),
  miniature: z.string(),
  number: z.number(),
  progress: z.number(),
  serie: episodeSerie,
  episodeUrl: z.string(),
});

export const episodeMiniatureListSchema = episodeMiniatureSchema.array();

export const episodeSchema = z
  .object({
    description: z.string(),
    next: episodeMiniatureSchema.optional(),
  })
  .merge(episodeMiniatureSchema);

export const getEpisode = (id: string) => async () => {
  const episodes = new Map<string, z.infer<typeof episodeSchema>>([
    [
      "1",
      {
        id: "1",
        number: 1,
        progress: 30,
        miniature:
          "https://pbs.twimg.com/media/Fd5kjK2UcAE1YKI?format=jpg&name=medium",
        episodeUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        serie: {
          id: "1",
          title: "Show name",
          season: 1,
        },
        next: {
          id: "2",
          number: 2,
          miniature:
            "https://pbs.twimg.com/media/Fd5kjK2UcAE1YKI?format=jpg&name=medium",
          progress: 0,
          episodeUrl:
            "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          serie: {
            id: "1",
            title: "next serie name",
            season: 1,
          },
        },
      },
    ],
    [
      "2",
      {
        id: "2",
        number: 2,
        progress: 30,
        miniature:
          "https://pbs.twimg.com/media/Fd5kjK2UcAE1YKI?format=jpg&name=medium",
        episodeUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        serie: {
          id: "2",
          title: "Test show",
          season: 2,
        },
      },
    ],
  ]);
  await sleep(1000);

  return await episodeSchema.parseAsync(episodes.get(id));
};

export const useEpisode = (
  id: string,
  options?: UseQueryOptions<
    Partial<z.infer<typeof episodeSchema>>,
    unknown,
    Partial<z.infer<typeof episodeSchema>>,
    string[]
  >
) => useQuery(["episode", id], getEpisode(id), options);

export const getEpisodeUpdates = async () => {
  await sleep(1000);

  return await episodeMiniatureListSchema.parseAsync([
    {
      id: "1",
      number: 1,
      progress: 70,
      miniature:
        "https://pbs.twimg.com/media/Fdjk7UeXoAA2i8O?format=jpg&name=medium",
      episodeUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      serie: {
        id: "1",
        title: "Show name",
        season: 1,
      },
    },
    {
      id: "2",
      number: 2,
      progress: 30,
      miniature:
        "https://pbs.twimg.com/media/Fl9jQcBaAAA-QMa?format=jpg&name=large",
      episodeUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      serie: {
        id: "1",
        title: "Show name",
        season: 1,
      },
    },
    {
      id: "3",
      number: 3,
      progress: 90,
      miniature:
        "https://pbs.twimg.com/media/FdgydlvVIAIsdB0?format=jpg&name=900x900",
      episodeUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      serie: {
        id: "2",
        title: "Show name",
        season: 2,
      },
    },
    {
      id: "4",
      number: 4,
      progress: 90,
      miniature:
        "https://pbs.twimg.com/media/FeXUdjQacAELIL2?format=jpg&name=medium",
      episodeUrl: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      serie: {
        id: "2",
        title: "Test show",
        season: 1,
      },
    },
  ]);
};

export const useEpisodeUpdates = (
  options?: UseQueryOptions<
    Partial<z.infer<typeof episodeMiniatureListSchema>>,
    unknown,
    z.infer<typeof episodeMiniatureListSchema>,
    string[]
  >
) => useQuery(["episode-my-list"], getEpisodeUpdates, options);

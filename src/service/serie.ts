import { z } from "zod";
import { sleep } from "../utils/sleep";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export interface Serie {
  id: string;
  miniature: string;
  title: string;
}

export const serieMiniatureScheme = z.object({
  id: z.string(),
  miniature: z.string(),
  title: z.string(),
});

export const serieMiniatureListScheme = serieMiniatureScheme.array();

export const serieScheme = z
  .object({
    description: z.string(),
    seasons: z.record(
      z.string(),
      z.array(
        z.object({
          id: z.string(),
          miniature: z.string(),
          number: z.number(),
          episodeUrl: z.string(),
          progress: z.number(),
        })
      )
    ),
  })
  .merge(serieMiniatureScheme);

export const getSerie = (id: string) => async () => {
  const series = new Map<string, any>([
    [
      "2",
      {
        id: "2",
        miniature:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99420-ROmwm2suzoNJ.png",
        title: "Shoujo Shuumatsu Ryokou",
        description:
          "Civilization is dead, but Chito and Yuuri are still alive. So they hop aboard their beloved Kettenkrad motorbike and aimlessly wander the ruins of the world they once knew. Day after hopeless day, they look for their next meal and fuel for their ride. But as long as the two are together, even an existence as bleak as theirs has a ray or two of sunshine in it, whether they're sucking down their fill of soup or hunting for machine parts to tinker with. For two girls in a world full of nothing, the experiences and feelings the two share give them something to live for…",
        seasons: {
          "1": [
            {
              id: "1",
              number: 1,
              miniature:
                "https://static.wikia.nocookie.net/girls-last-tour/images/8/8a/Vlcsnap-2018-08-29-10h47m12s804.png/revision/latest?cb=20181209050446",
              progress: 100,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "2",
              number: 2,
              miniature:
                "https://static.wikia.nocookie.net/girls-last-tour/images/c/cf/Episode_2_pre-book_burn.png/revision/latest/scale-to-width-down/1000?cb=20200227002150",
              progress: 100,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "3",
              number: 3,
              miniature:
                "https://static.wikia.nocookie.net/girls-last-tour/images/c/c4/Episode_3-6.jpg/revision/latest/scale-to-width-down/350?cb=20200520014714",
              progress: 100,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "4",
              number: 4,
              miniature:
                "https://static.wikia.nocookie.net/girls-last-tour/images/f/f6/Episode_4-3.jpg/revision/latest/scale-to-width-down/350?cb=20200520015812",
              progress: 100,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "5",
              number: 5,
              miniature:
                "https://static.wikia.nocookie.net/girls-last-tour/images/a/a8/Episode_5-1.jpg/revision/latest/scale-to-width-down/350?cb=20200520020642",
              progress: 80,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "6",
              number: 6,
              miniature:
                "https://static.wikia.nocookie.net/girls-last-tour/images/a/a5/Episode_6-5.jpg/revision/latest/scale-to-width-down/350?cb=20200520021835",
              progress: 20,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "7",
              number: 7,
              miniature:
                "https://static.wikia.nocookie.net/girls-last-tour/images/8/8d/Episode_7-1.jpg/revision/latest/scale-to-width-down/350?cb=20200520022729",
              progress: 0,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
          ],
        },
      },
    ],
    [
      "1",
      {
        id: "1",
        miniature:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99426-5jWTUs719lQN.png",
        title: "Sora yori mo Tooi Basho",
        description:
          "Mari Tamaki is in her second year of high school and wants to start something. It's then that she meets Shirase, a girl with few friends who's considered weirdo by the rest of the class and nicknamed \"Antarctic\" since it's all she ever talks about. Unlike her peers, Mari is moved by Shirase's dedication and decides that even though it's unlikely that high school girls will ever go to Antarctica, she's going to try to go with Shirase.",
        seasons: {
          "1": [
            {
              id: "1",
              number: 1,
              miniature:
                "https://img1.ak.crunchyroll.com/i/spire3-tmb/b62cf0b12312a40bb2c37bf1cc95aa0e1514845688_full.jpg",
              progress: 100,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
          ],
        },
      },
    ],
    [
      "3",
      {
        id: "3",
        miniature:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21455-XZTQ8Fmii75j.jpg",
        title: "NEW GAME!",
        description:
          "Fresh out of high school, 18-year-old Aoba Suzukaze is bright-eyed, bushy-tailed, and ready for her first day of work at her dream job. She’s joining the character design team at Eagle Jump, the company that makes her favorite video games! But the real world of office culture can be a challenge for a total noob. From her awkward first day to her first game’s debut, she’s got a lot of skills to master. Luckily, her charming determination wins over even her quirkiest of coworkers, and before she knows it, Aoba has joined the party!",
        seasons: {
          "1": [
            {
              id: "1",
              number: 1,
              miniature:
                "https://img1.ak.crunchyroll.com/i/spire2-tmb/1fcd891174c1304ce290b446afd8d18f1467685012_full.jpg",
              progress: 100,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "2",
              number: 2,
              miniature:
                "https://img1.ak.crunchyroll.com/i/spire4-tmb/4b3bb5ebc4a92d8ac38d352b9c9b96eb1468258409_full.jpg",
              progress: 100,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
          ],
          "2": [
            {
              id: "1",
              number: 1,
              miniature:
                "https://img1.ak.crunchyroll.com/i/spire4-tmb/c140506e4b717267f0fc4009ecd162a01468607923_full.jpg",
              progress: 22,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
            {
              id: "2",
              number: 2,
              miniature:
                "https://img1.ak.crunchyroll.com/i/spire4-tmb/530e0d37841956a12144f11c28df481b1469132597_full.jpg",
              progress: 0,
              episodeUrl:
                "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            },
          ],
        },
      },
    ],
  ]);
  await sleep(1000);

  return await serieScheme.parseAsync(series.get(id));
};

export const useSerie = (
  id: string,
  options?: UseQueryOptions<
    Partial<z.infer<typeof serieScheme>>,
    unknown,
    Partial<z.infer<typeof serieScheme>>,
    string[]
  >
) => useQuery(["serie", id], getSerie(id), options);

export const getSerieSearch = (searchTerm: string) => async () => {
  let series: z.infer<typeof serieMiniatureListScheme> = [
    {
      id: "1",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99426-5jWTUs719lQN.png",
      title: "Sora yori mo Tooi Basho",
    },
    {
      id: "2",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99420-ROmwm2suzoNJ.png",
      title: "Shoujo Shuumatsu Ryokou",
    },
    {
      id: "3",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21455-XZTQ8Fmii75j.jpg",
      title: "NEW GAME!",
    },
    {
      id: "4",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140439-qpBzXkvVqSx3.jpg",
      title: "Mob Psycho 100 III",
    },
    {
      id: "5",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142838-ECZSqfknAqAT.jpg",
      title: "SPY×FAMILY Part 2",
    },
    {
      id: "6",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146668-JNIr7FRzEUaM.jpg",
      title: "RWBY: Hyousetsu Teikoku",
    },
    {
      id: "7",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143270-iZOJX2DMUFMC.jpg",
      title: "Lycoris Recoil",
    },
  ];

  if (searchTerm) {
    series = series.filter((s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  await sleep(1000);

  return await serieMiniatureListScheme.parseAsync(series);
};
export const useSerieSearch = (searchTerm: string) =>
  useQuery(["serie", searchTerm], getSerieSearch(searchTerm));

export const getSerieLibrary = async () => {
  const series: z.infer<typeof serieMiniatureListScheme> = [
    {
      id: "1",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99426-5jWTUs719lQN.png",
      title: "Sora yori mo Tooi Basho",
    },
    {
      id: "2",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99420-ROmwm2suzoNJ.png",
      title: "Shoujo Shuumatsu Ryokou",
    },
    {
      id: "3",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21455-XZTQ8Fmii75j.jpg",
      title: "NEW GAME!",
    },
    {
      id: "4",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140439-qpBzXkvVqSx3.jpg",
      title: "Mob Psycho 100 III",
    },
    {
      id: "5",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142838-ECZSqfknAqAT.jpg",
      title: "SPY×FAMILY Part 2",
    },
    {
      id: "6",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146668-JNIr7FRzEUaM.jpg",
      title: "RWBY: Hyousetsu Teikoku",
    },
    {
      id: "7",
      miniature:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143270-iZOJX2DMUFMC.jpg",
      title: "Lycoris Recoil",
    },
  ];

  return await serieMiniatureListScheme.parseAsync(series);
};

export const useSerieLibrary = (
  options?: UseQueryOptions<
    Partial<z.infer<typeof serieMiniatureListScheme>>,
    unknown,
    z.infer<typeof serieMiniatureListScheme>,
    string[]
  >
) => useQuery(["serie-library"], getSerieLibrary, options);

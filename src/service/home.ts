import { useQuery } from "@tanstack/react-query";
import { Episode } from "./episode";
import { Serie } from "./serie";

export const getHome = async () => {
  return new Promise<{
    continue?: Episode[];
    list?: Serie[];
    popular?: Serie[];
    new?: Serie[];
  }>((res) => {
    setTimeout(() => {
      res({
        continue: [
          {
            id: "22",
            miniature:
              "https://pbs.twimg.com/media/Fd5kjK2UcAE1YKI?format=jpg&name=medium",
            progress: 80,
            season: "1",
            title: "3",
            serie: {
              id: "2",
              title: "Show name",
            },
            episodeUrl:
              "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          },
          {
            id: "3",
            miniature:
              "https://pbs.twimg.com/media/Fd9IEHlVQAAnp0s?format=jpg&name=medium",
            progress: 100,
            season: "4",
            title: "3",
            serie: {
              id: "3",
              title: "Show name",
            },
            episodeUrl:
              "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          },
          {
            id: "1",
            miniature:
              "https://pbs.twimg.com/media/FcODsj_aMAAsmAd?format=jpg&name=medium",
            progress: 40,
            season: "2",
            title: "22",
            serie: {
              id: "1",
              title: "Show name",
            },
            episodeUrl:
              "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          },
        ],
        list: [
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
        ],
        popular: [
          {
            id: "1",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140439-qpBzXkvVqSx3.jpg",
            title: "Mob Psycho 100 III",
          },
          {
            id: "2",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142838-ECZSqfknAqAT.jpg",
            title: "SPY×FAMILY Part 2",
          },
          {
            id: "3",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png",
            title: "Chainsaw Man",
          },
          {
            id: "4",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx125367-bl5vGalMH2cC.png",
            title: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
          },
          {
            id: "5",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143277-BJYg1aFUE8tV.jpg",
            title: "Urusei Yatsura (2022)",
          },
        ],
        new: [
          {
            id: "1",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131516-kLB37ISBeOX0.jpg",
            title: "Do It Yourself!!",
          },
          {
            id: "222",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131182-NYATKomnS2RQ.jpg",
            title: "Yama no Susume: Next Summit",
          },
          {
            id: "3",
            miniature:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143086-ewIxO4RXqMuM.jpg",
            title: "Poputepipikku 2",
          },
        ],
      });
    }, 1000);
  });
};

export const useHome = () => useQuery(["home"], getHome);

import * as loginService from "./user";
import * as homeService from "./home";
import * as serieService from "./serie";
import * as episodeService from "./episode";

const service = {
  ...loginService,
  ...homeService,
  ...serieService,
  ...episodeService,
};

export default service;

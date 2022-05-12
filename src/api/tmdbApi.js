import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
  person: "person"
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
  person: (person, id, params) => {
    const url = category[person] + "/" + id;
    return axiosClient.get(url, params)
  },
  combined_credits: (person, id) => {
    const url = category[person] + "/" + id + "/combined_credits";
    return axiosClient.get(url, { params: {} });
  },
  external_ids: (person, id) => {
    const url = category[person] + "/" + id + "/external_ids";
    return axiosClient.get(url, { params: {}})
  },
  getGenresList: (genres, params) => {
    const url = "/discover/movie";
    return axiosClient.get(url, params);
  }
};

export default tmdbApi;
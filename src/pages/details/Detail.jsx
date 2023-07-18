import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom/";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./detail.scss";
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list/MovieList";
// import UserScore from "../../components/user-score/UserScore";

const Detail = () => {
  const { category, id } = useParams();
  let months = [
    0,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // item.release_date = '2022-03-30'

  const getDate = (releaseDate) => {
    const date = releaseDate.split("-");
    return `${months[parseInt(date[1])]} ${date[2]}, ${date[0]}`;
  };

  const getRunTime = (runtime) => {
    console.log(runtime);
    if (runtime < 60 && runtime !== 0) return `${runtime}min`;
    else if (runtime === 60) return `1h`;
    else if (runtime > 60) {
      let hours = runtime / 60;
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60;
      let rminutes = Math.round(minutes);
      return `${rhours}h ${rminutes}min`;
    } else if (runtime === 0) return "Unknown";
  };
  // console.log(category, id);

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      response.release_date
        ? (response.release_date = getDate(response.release_date))
        : (response.first_air_date = getDate(response.first_air_date));
      // console.log(response);
      setItem(response);
      // console.log(response.episode_run_time[0]);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <div className="title">{item.title || item.name}</div>
              <div className="facts">
                <span className="release">
                  {item.release_date ? item.release_date : item.first_air_date}
                </span>
                <span className="dot"></span>
                <span className="runtime">
                  {getRunTime(item.runtime) ||
                    getRunTime(
                      item.episode_run_time[0] !== undefined
                        ? item.episode_run_time[0]
                        : 0
                    )}
                </span>
                <span className="dot dot-small"></span>
                <span className="genres">
                  {item.genres && item.genres.length > 0
                    ? item.genres.slice(0, 5).map((genre) => (
                        <Link
                          to={`/genre/${
                            genre.id
                          }-${category}-${genre.name.replace(/\s+/g, "-")}`}
                        >
                          <span key={genre.id} className="genres__item">
                            {genre.name}
                          </span>
                        </Link>
                      ))
                    : "Unknown"}
                </span>
              </div>
              <div className="tagline">{item.tagline}</div>
              <div className="section__header overview">
                <h2>Overview</h2>
              </div>
              <div className="overview">{item.overview}</div>
            </div>
          </div>
          <div className="cast__list">
            <div className="cast__list-header">
              <h2>Top Cast</h2>
            </div>
            <CastList id={item.id} />
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;

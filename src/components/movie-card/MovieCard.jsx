import React, { useEffect, useState } from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";

import UserScore from "../user-score/UserScore";
import SkeletonLoading from "../skeleton-loading/SkeletonLoading";

const MovieCard = (props) => {
  const item = props.item;

  // console.log(item);

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500image(item.poster_path || item.backdrop_path);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3 * 1000);
  }, []);

  return (
    <Link
      className="relative block overflow-hidden rounded-lg movie-card"
      to={link}
    >
      {loading && <SkeletonLoading className="skeleton-img" />}
      {!loading && (
        <>
          <div
            className="movie-card-bg ease-in-out"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <UserScore item={item.vote_average} />
          </div>
          <div className="movie-info">
            <div className="movie-info__name ">{item.title || item.name}</div>
            <div className="movie-info__date">
              {item.release_date ? item.release_date : item.first_air_date}
            </div>
          </div>
        </>
      )}
    </Link>
  );
};

export default MovieCard;

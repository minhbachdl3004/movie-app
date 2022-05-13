import React, { useState, useEffect } from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";

import UserScore from "../user-score/UserScore";

import { Skeleton } from "antd";

const MovieCard = (props) => {
  const item = props.item;

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [item.poster_path, item.backdrop_path]);

  console.log(item);

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      {!imgLoaded && (
        <div className="absolute inset-0">
          <Skeleton.Input active className="image-skeleton" />
        </div>
      )}
      <div
        className="movie-card ease-in-out"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <UserScore item={item.vote_average} />
      </div>
      <div className="movie-info">
        <div className="movie-info__name ">{item.title || item.name}</div>
        <div className="movie-info__date">{item.release_date || item.first_air_date}</div>
      </div>
    </Link>
  );
};

export default MovieCard;

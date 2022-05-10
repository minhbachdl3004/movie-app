import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";

import UserScore from "../user-score/UserScore";

const MovieCard = (props) => {
  const item = props.item;

  console.log(item);

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <UserScore item={item.vote_average} />
      </div>
      <h3>{item.title || item.name}</h3>
      <p>{item.release_date || item.first_air_date}</p>
    </Link>
  );
};

export default MovieCard;

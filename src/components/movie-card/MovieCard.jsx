import "./movie-card.scss";

import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";
import MovieScore from "../movie-score/MovieScore";


const MovieCard = (props) => {

  const { item } = props;
  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500image(item.poster_path || item.backdrop_path);

  return (
    <Link
      className="relative block overflow-hidden rounded-lg movie-card"
      to={link}
    >
      <>
        <div
          className="movie-card-bg ease-in-out"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <MovieScore item={item.vote_average} />
        </div>
        <div className="movie-info">
          <div className="movie-info__name ">{item.title || item.name}</div>
          <div className="movie-info__detail">
            <span className="movie-info__date">
              {item.release_date ? item.release_date : item.first_air_date}
            </span>
            <span className="category">
              {props.category === "movie"
                ? props.category.charAt(0).toUpperCase() +
                  props.category.slice(1)
                : "TV"}
            </span>
          </div>
        </div>
      </>
    </Link>
  );
};

export default MovieCard;

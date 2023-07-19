import "./movie-card.scss";

import { Link } from "react-router-dom";

import { category } from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";
import MovieScore from "../movie-score/MovieScore";
import Image from "../ImageLazyLoad/Image";
import dayjs from "dayjs";

const MovieCard = (props) => {
  const { item } = props;
  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.originalImage(item.poster_path || item.backdrop_path);

  return (
    <Link
      className="relative block overflow-hidden rounded-lg movie-card"
      to={link}
    >
      <div className="poster-image-container">
        <Image className="movie-card-bg ease-in-out" src={bg}></Image>
        <MovieScore item={item.vote_average} />
      </div>
      <div className="movie-info">
        <div className="movie-info__name">{item.title || item.name}</div>
        <div className="movie-info__detail">
          <span className="movie-info__date">
            {item.release_date
              ? dayjs(item.release_date).format("MMM D, YYYY")
              : dayjs(item.first_air_date).format("MMM D, YYYY")}
          </span>
          <span className="category">
            {props.category === "movie"
              ? props.category.charAt(0).toUpperCase() + props.category.slice(1)
              : "TV"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./movie-list.scss";

import { SwiperSlide, Swiper } from "swiper/react";

import tmdbApi, { category } from "../../api/tmdbApi";

import MovieCard from "../movie-card/MovieCard";

const MovieList = (props) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      // console.log(response.results);
      setMovies(response.results);
    };
    getList();
  }, [props.category, props.id, props.type]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard item={movie} category={props.category} />
            </SwiperSlide>
          ))}

        {!movies &&
          [...Array(7)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="skeleton-loading-card"></div>
              <div className="skeleton-loading-card skeleton-title"></div>
              <div className="skeleton-loading-card skeleton-release-date"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;

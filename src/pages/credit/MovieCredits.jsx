import React, { useState, useEffect } from "react";

import tmdbApi from "../../api/tmdbApi";

import MovieCard from "../../components/movie-card/MovieCard";

import { SwiperSlide, Swiper } from "swiper/react";

const MovieCredits = (props) => {
  const [movies, setMovies] = useState([]);

  const keyword = "person";

  useEffect(() => {
    const getMoviesCredits = async () => {
      const res = await tmdbApi.combined_credits(keyword, props.id);
      setMovies(res.cast.filter((c) => c.backdrop_path != null).filter(c => c.id !== 397722));
      // console.log(movies);
    };
    getMoviesCredits();
  }, [movies, props.id]);

  return (
    <>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} category={item.media_type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <i class="fa-brands fa-instagram"></i>
    </>
  );
};

export default MovieCredits;

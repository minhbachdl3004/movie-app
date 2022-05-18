import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom/";

import axios from "axios";

import MovieCard from "../components/movie-card/MovieCard";

import PageHeader from "../components/page-header/PageHeader";

import '../components/movie-grid/movie-grid.scss'

const Genre = () => {
  const { query } = useParams();

  const queryArr = query.split("-");

  const id = queryArr[0];
  
  const genre = queryArr[1];

  const category = queryArr[2];

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getGenreList = async () => {

      const url = `https://api.themoviedb.org/3/discover/${category}?api_key=6eecc3382b3691fd54aef5329aa6e1ca&language=en-US&with_genres=${id}`;

      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setItems(res.data.results);
        })
        .catch((error) => console.error(error));

    };
    getGenreList();
  }, [category, id]);

  // console.log(id);

  return (
    <>
      <PageHeader>{ genre }</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <div className="movie-grid">
            {items.map((item) => (
              <MovieCard category={category} item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;

import React from 'react';

import { useParams } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';

import MovieGrid from '../components/movie-grid/MovieGrid';

import PopularPeople from '../components/popular-people/PopularPeople';


const Catalog = () => {

  const { category } = useParams();

  console.log(category);
  return (
    <>
      <PageHeader>
        {category === cate.movie
          ? "Movies"
          : category === cate.tv
          ? "TV Series"
          : "Popular People"}
      </PageHeader>
      {category === cate.person ? (
        <div className="container">
          <div className="section mb-3">
            <PopularPeople category={category} />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="section mb-3">
            <MovieGrid category={category} />
          </div>
        </div>
      )}
    </>
  );
}

export default Catalog;



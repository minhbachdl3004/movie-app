import React, { useState, useEffect, useCallback } from "react";

import "./popular-people.scss";

import CreditCard from "../../pages/credit/CreditCard";

import { useParams } from "react-router-dom/";

import tmdbApi, { category } from "../../api/tmdbApi";

import { OutlineButton } from "../button/Button";

import Button from "../button/Button";

import Input from "../input/Input";

import { useHistory } from "react-router-dom";

const PopularPeople = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};

        response = await tmdbApi.getPopularPeople({ params });
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      console.log(response.results);
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      response = await tmdbApi.getPopularPeople({ params });
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
          <PersonSearch category='person' keyword={keyword} />
      </div>
      <div className="people-grid">
        {items.map((item) => (
          <CreditCard item={item} key={item.id} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="people-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

const PersonSearch = props => {
    const history = useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            history.push(`/${category[props.category]}/search/${keyword}`);
        }
    }, [keyword, props.category, history]);

    useEffect(() => {
        const enterEvent = e => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        }
    }, [keyword, goToSearch]);


    return (
      <div className="person-search">
        <Input
          type="text"
          placeholder="Search Person"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button className='search-small' onClick={goToSearch}>Search</Button>
      </div>
    );
}

export default PopularPeople;

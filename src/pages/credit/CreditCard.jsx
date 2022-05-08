import React from "react";

import apiConfig from "../../api/apiConfig";

import { category } from "../../api/tmdbApi";

import { Link } from "react-router-dom";

import "./credit.scss";

const CreditCard = (props) => {
  const item = props.item;

  // console.log(props);

  const link = "/" + category["person"] + "/" + item.id;


  const bg = apiConfig.w500image(item.profile_path);

  return (
    <Link to={link}>
      <div className="casts__item">
        <div
          className="casts__item__img"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <h2 className="casts__item__name">{item.name}</h2>
        <p>{item.character}</p>
      </div>
    </Link>
  );
};


export default CreditCard;

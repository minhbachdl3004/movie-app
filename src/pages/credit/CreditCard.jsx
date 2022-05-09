import React from "react";

import apiConfig from "../../api/apiConfig";

import { category } from "../../api/tmdbApi";

import { Link } from "react-router-dom";

import "./credit.scss";

import "./credit-card.scss";

const CreditCard = (props) => {
  const item = props.item;

  // console.log(props);

  const link = "/" + category["person"] + "/" + item.id;

  const bg = apiConfig.w500image(item.profile_path);

  return (
    <Link to={link}>
      <div
        className="credit-card"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <h3>{item.title || item.name}</h3>
      <p>{item.character}</p>
    </Link>
  );
};

export default CreditCard;

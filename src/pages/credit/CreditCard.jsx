import React from "react";

import apiConfig from "../../api/apiConfig";

import { category } from "../../api/tmdbApi";

import { Link } from "react-router-dom";

import "./credit.scss";

import "./credit-card.scss";

const CreditCard = (props) => {
  const item = props.item;

  // const sub = [...item.known_for].slice(0, 3);

  // console.log(sub)

  // console.log(item);

  const link = "/" + category["person"] + "/" + item.id;

  const bg = apiConfig.w500image(item.profile_path);


  return (
    <Link className="credit-card" to={link}>
      <div
        className="credit-card-bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="credit-info flex flex-col gap-2 p-2.5">
        <div className="credit-info__name  h-10 text-base overflow-hidden font-medium leading-5">{item.name}</div>
        <div className="credit-info__character overflow-hidden">{item.character}</div>
      </div>
    </Link>
  );
};

export default CreditCard;

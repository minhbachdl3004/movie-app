import React from "react";

import apiConfig from "../../api/apiConfig";

import { category } from "../../api/tmdbApi";

import { Link } from "react-router-dom";

import "./credit.scss";

import "./credit-card.scss";
import Image from "../../components/ImageLazyLoad/Image";

const CreditCard = (props) => {
  const item = props.item;

  // const sub = [...item.known_for].slice(0, 3);

  // console.log(sub)

  // console.log(item);

  const link = "/" + category["person"] + "/" + item.id;

  const bg = apiConfig.w500image(item.profile_path);

  return (
    <Link className="credit-card" to={link}>
      <div className="credit-card-image">
        <Image className="credit-card-bg" src={bg}></Image>
      </div>
      <div className="credit-info__name text-base overflow-hidden font-medium leading-5">
        {item.name}
      </div>
      <div className="credit-info__character overflow-hidden">
        {item.character}
      </div>
    </Link>
  );
};

export default CreditCard;

import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";


import CreditCard from "../credit/CreditCard";

const CastList = (props) => {

  const { category } = useParams();

  // console.log(props);

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
      // console.log(casts);
    };
    getCredits();
  }, [casts, category, props.id]);

  return (
    <div className="casts">
      {casts.map((item, i) => (
        <CreditCard item={item} />
      ))}
    </div>
  );
};

export default CastList;

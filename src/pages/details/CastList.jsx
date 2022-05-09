import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";

import { SwiperSlide, Swiper } from "swiper/react";


import CreditCard from "../credit/CreditCard";

const CastList = (props) => {

  const { category } = useParams();

  // console.log(props);

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.filter(c => c.profile_path != null).slice(0, 10));
      console.log(casts);
    };
    getCredits();
  }, [casts, category, props.id]);

  return (
    <div className="casts">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {casts.map((item, i) => (
          <SwiperSlide key={i}>
            <CreditCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CastList;

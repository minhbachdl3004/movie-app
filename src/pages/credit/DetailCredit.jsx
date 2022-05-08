import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./credit.scss";

import MovieCredits from './MovieCredits';
import ExternalID from "./ExternalID";


const DetailCredit = () => {
  const { category, id } = useParams();

  console.log(category, id);

  const [item, setItem] = useState(null);
  const keyword = "person";

  useEffect(() => {
    const getDetailCredit = async () => {
      const response = await tmdbApi.person(keyword, id, { params: {} });
      setItem(response);
      console.log(item);
    };
    getDetailCredit();
  }, [item, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.profile_path
              )})`,
            }}
          ></div>
          <div className="mb-3 credit-content container">
            <div className="credit-content__poster">
              <div
                className="credit-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.profile_path
                  )})`,
                }}
              ></div>
              <div className="column">
                <div className="social-links">
                  <ExternalID id={item.id} />
                </div>
                <h3>Personal Info</h3>
                <dl>
                  <dt><strong>Known For</strong></dt>
                  <dd>Acting</dd>
                  <dt><strong>Gender</strong></dt>
                  <dd>{item.gender === 1 ? "Female" : "Male"}</dd>
                  <dt><strong>Birthday</strong></dt>
                  <dd>{item.birthday}</dd>
                  <dt><strong>Place of Birth</strong></dt>
                  <dd>{item.place_of_birth}</dd>
                  <dt><strong>Also Known As</strong></dt>
                  <ul>
                    {
                      item.also_known_as.slice(0, 5).map((item, i) => (
                        <li className="additionalName">{item}</li>
                      ))
                    }
                  </ul>
                </dl>
              </div>
            </div>
            <div className="credit-content__info">
              <div className="name">{item.name}</div>
              <h3 className="bio">Biography</h3>
              <div className="biography">{item.biography}</div>
              <div className="cast">
                <div className="section__header">
                  <h2>Known For</h2>
                </div>
                <MovieCredits id={item.id} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailCredit;

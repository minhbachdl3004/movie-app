import React from "react";

import { CircularProgress } from "@mui/material";

import "./movie-score.scss";

const MovieScore = (props) => {
  const item = props.item;
  // console.log(item);
  return (
    <>
        <div className="percent">
          <div className="score-container">
            <span className="score">{item.toFixed(1)}</span>
            <CircularProgress
              variant="determinate"
              value={item * 10}
              color={`${item > 7 ? 'success' :  item <=7 && item > 5 ? "warning" : "error"}`}
            />
          </div>
        </div>
    </>
  );
};

export default MovieScore;

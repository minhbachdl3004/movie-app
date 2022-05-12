import React from "react";

import { CircularProgress } from "@mui/material";

import "./user-score.scss";

const UserScore = (props) => {
  const item = props.item;
  return (
    <>
      {item !== 0 ? (
        <div className="percent" style={{ width: 50, height: 50 }}>
          {item * 10 >= 70 ? (
            <>
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: 12,
                }}
              >
                <span className="score">{item * 10 + "%"}</span>
              </span>
              <CircularProgress
                variant="determinate"
                value={item * 10}
                color="success"
              />
            </>
          ) : item * 10 > 50 && item * 10 < 70 ? (
            <>
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: 12,
                }}
              >
                <span className="score">{item * 10 + '%'}</span>
              </span>
              <CircularProgress
                variant="determinate"
                value={item * 10}
                color="warning"
              />
            </>
          ) : (
            <>
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: 12,
                }}
              >
                <span className="score">{item * 10 + "%"}</span>
              </span>
              <CircularProgress
                variant="determinate"
                value={item * 10}
                color="error"
              />
            </>
          )}
        </div>
      ) : (
        <div style={{ width: 50, height: 50 }}></div>
      )}
    </>
  );
};

export default UserScore;

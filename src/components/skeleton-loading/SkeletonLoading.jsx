import React from "react";

import './skeleton-loading.scss';

const SkeletonLoading = ({ className = "" }) => {
  // destructuring
  return <div className={`skeleton ${className}`}></div>;
};

export default SkeletonLoading;
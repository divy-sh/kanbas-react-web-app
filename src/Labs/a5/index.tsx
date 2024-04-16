import React from "react";
import WorkingWithArrays from "./WorkingWithArrays";
import EncodingParametersInURLs from "./EncodingParametersInUrls";
import WorkingWithObjects from "./WorkingWithObjects";
const Assignment5 = () => {
  const link = `${process.env.REACT_APP_API_BASE}/a5/welcome`;
  return (
    <div className="p-2">
      <h1>Assignment 5</h1>
      <a href={link}>Welcome</a>
      <hr />
      <EncodingParametersInURLs />
      <hr />
      <WorkingWithObjects />
      <hr />
      <WorkingWithArrays />
    </div>
  );
};
export default Assignment5;

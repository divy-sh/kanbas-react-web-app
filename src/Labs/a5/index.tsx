import React from "react";
import WorkingWithArrays from "./WorkingWithArrays";
import EncodingParametersInURLs from "./EncodingParametersInUrls";
import WorkingWithObjects from "./WorkingWithObjects";
const Assignment5 = () => {
  return (
    <div className="p-2">
      <h1>Assignment 5</h1>
      <a href="http://localhost:4000/a5/welcome">Welcome</a>
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

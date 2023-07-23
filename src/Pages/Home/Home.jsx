import React, { useState } from "react";
import SearchCollege from "./SearchCollege";
import Colleges from "./Colleges";

const Home = () => {
  

  return (
    <>
      <div>
        <h1 className="text-5xl my-3 text-center font-bold">Find Your Path to Higher Education</h1>
      </div>
      <SearchCollege></SearchCollege>
      <Colleges></Colleges>
    </>
  );
};

export default Home;

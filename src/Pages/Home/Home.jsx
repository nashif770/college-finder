import React, { useState } from "react";
import SearchCollege from "./SearchCollege";
import Colleges from "./Colleges";
import ImageGallary from "./ImageGallary";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <SearchCollege></SearchCollege>
      <Colleges></Colleges>
      <ImageGallary></ImageGallary>
      <Reviews></Reviews>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import useColleges from "../../Hooks/useColleges";

const ImageGallary = () => {
  const [colleges] = useColleges();

  return (
    <div>
        <Heading title={"Check Our Gallery"}></Heading>
      <div className="grid grid-cols-3 gap-6 p-12">
        {colleges?.map((college) => (
          <div key={college.college_id} className="card w-96 bg-base-100 ">
            <img src={college.image} alt="Shoes" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;

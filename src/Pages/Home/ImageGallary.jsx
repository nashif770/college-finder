import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";

const ImageGallary = () => {
  const [colleges, setColleges] = useState("");
  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const allColleges = colleges.colleges;

  console.log("Hey", colleges);

  return (
    <div>
        <Heading title={"Check Our Gallery"}></Heading>
      <div className="grid grid-cols-3 gap-6 p-12">
        {allColleges?.map((college) => (
          <div className="card w-96 bg-base-100 ">
            <img src={college.image} alt="Shoes" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;

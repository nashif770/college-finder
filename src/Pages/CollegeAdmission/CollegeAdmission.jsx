import React from "react";
import useColleges from "../../Hooks/useColleges";
import Heading from "../../Components/Heading";
import { Link } from "react-router-dom";

const CollegeAdmission = () => {
  const [colleges] = useColleges();
  return (
    <div className="text-black">
      <Heading title={"Colleges For Admission"}></Heading>
      <div className="p-6">
        {colleges?.map((college) => (
          <Link to={`/admissionSubmit/${college?.college_id}`}>
            <div className="bg-blue-300 m-6 p-6 text-center rounded-full">
              <h3 className="text-2xl">{college?.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollegeAdmission;

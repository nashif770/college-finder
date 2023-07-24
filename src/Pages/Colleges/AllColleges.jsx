import React from "react";
import useColleges from "../../Hooks/useColleges";
import Heading from "../../Components/Heading";
import { Link } from "react-router-dom";

const AllColleges = () => {
  const [colleges] = useColleges();
  return (
    <div>
      <Heading title={"All The Colleges"}></Heading>
      <div className="grid grid-cols-3 gap-6 p-12">
        {colleges?.map((college) => (
          <div
            key={college.college_id}
            className="card w-96 text-center bg-[#72808A] text-black"
          >
            <figure>
              <img src={college.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title m-auto h-16 font-bold">
                {college.name}
              </h2>
              <p className="my-1">{college?.description}</p>
              <div>
                <p className="font-bold my-1">Admission Deadlines:</p>
                <ul className="">
                  <li className="flex justify-between">
                    <span>Fall</span>
                    <span>{college?.admissionProcess.deadlines.fall}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Spring</span>
                    <span>{college?.admissionProcess.deadlines.spring}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Summer</span>
                    <span>{college?.admissionProcess.deadlines.summer}</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold my-1">Events:</p>
                <ul>
                  <li className="flex justify-between">
                    <span>{college?.events[0].title}</span>{" "}
                    <span>{college?.events[0].date}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{college?.events[1].title}</span>{" "}
                    <span>{college?.events[1].date}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{college?.events[2].title}</span>{" "}
                    <span>{college?.events[2].date}</span>
                  </li>
                </ul>
              </div>
              <div className="card-actions justify-end">
                <Link to={`collegeDetail/${college.college_id}`}>
                  <button className="btn btn-primary w-full mt-6">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllColleges;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useColleges from "../../Hooks/useColleges";

const CollegeDetails = () => {
  const { college_id } = useParams();

  const [colleges] = useColleges();

  const selectedCollege = colleges?.find(
    (allCollege) => allCollege?.college_id == college_id
  );

  console.log(selectedCollege);

  return (
    <div className="text-black m-6">
      <h1 className="text-4xl text-center">{selectedCollege?.name}</h1>
      <img className="m-auto mb-3" src={selectedCollege?.image} alt="" />
      <p className="text-center font-bold">{selectedCollege?.location}</p>
      <p className="mb-3 text-center">{selectedCollege?.description}</p>
      <div className="flex justify-center">
        <div className="mx-6 bg-white p-5 border rounded-xl shadow-xl w-1/2">
          <p className="font-bold my-1 text-center">Admission Process</p>
          <ul className="">
            <li className="flex justify-between">
              <span>Fall</span>
              <span>{selectedCollege?.admissionProcess.deadlines.fall}</span>
            </li>
            <li className="flex justify-between">
              <span>Spring</span>
              <span>{selectedCollege?.admissionProcess.deadlines.spring}</span>
            </li>
            <li className="flex justify-between">
              <span>Summer</span>
              <span>{selectedCollege?.admissionProcess.deadlines.summer}</span>
            </li>
          </ul>
        </div>
        <div className="mx-6 bg-white p-5 border rounded-xl shadow-xl w-1/2">
          <p className="font-bold my-1 text-center">Events</p>
          <ul>
            <li className="flex justify-between">
              <span>{selectedCollege?.events[0].title}</span>{" "}
              <span>{selectedCollege?.events[0].date}</span>
            </li>
            <li className="flex justify-between">
              <span>{selectedCollege?.events[1].title}</span>{" "}
              <span>{selectedCollege?.events[1].date}</span>
            </li>
            <li className="flex justify-between">
              <span>{selectedCollege?.events[2].title}</span>{" "}
              <span>{selectedCollege?.events[2].date}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-6">
        <h3 className="font-bold my-1 text-center">Research Works</h3>
        <div className="grid grid-cols-3">
            {selectedCollege?.researchWorks.map(researches => 
                <div className="bg-white m-3 p-6 rounded-xl" key={researches.title}>
                    <p ><span className="font-bold">Title:</span> {researches.title}</p>
                    <p className="font-thin"><span className="font-bold">Area:</span> {researches.area}</p>
                    <p className="mt-3">{researches.description}</p>
                </div>
                )}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;

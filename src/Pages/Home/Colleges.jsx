import React, { useEffect, useState } from "react";

const Colleges = () => {
  const [colleges, setColleges] = useState("");
  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const allColleges = colleges.colleges;

  console.log("Hey", colleges);

  return (
    <div className="grid grid-cols-3 gap-6 p-12">
      {allColleges?.map((college) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={college.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{college.name}</h2>
            <p>{college?.description}</p>
            <p className="font-bold">Admission Deadlines:</p>
            <ul className="w-3/4">
                <li className="flex justify-between"><span>Fall</span>    <span>{college?.admissionProcess.deadlines.fall}</span></li>
                <li className="flex justify-between"><span>Spring</span>  <span>{college?.admissionProcess.deadlines.spring}</span></li>
                <li className="flex justify-between"><span>Summer</span>  <span>{college?.admissionProcess.deadlines.summer}</span></li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colleges;

import React, { useState } from "react";
import Heading from "../../Components/Heading";
import useColleges from "../../Hooks/useColleges";

const SearchCollege = () => {
  const [colleges] = useColleges();
  const [query, setQuery] = useState("");
  const data = colleges.map((college) => college.name);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  console.log(query);
  const filteredCollege = data.filter((data) =>
    data.toLowerCase().includes(query.toLowerCase())
  );

  const searchedCollege = colleges.find(
    (searched) => searched.name == filteredCollege
  );

  return (
    <div className="p-2 min-h-screen bg-[url('https://i.ibb.co/nRDfBFQ/Banner2.jpg')] bg-cover text-black">
      <Heading title={"Find Your Path to Higher Education"}></Heading>
      <div className="flex justify-center align-middle mt-6">
        <div className="">
          <div className="dropdown dropdown-bottom">
            <input
              type="text"
              className="p-3 rounded-xl bg-slate-300"
              placeholder="Search..."
              value={query}
              onChange={handleInputChange}
            />
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 m-auto"
            >
              {filteredCollege.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <label tabIndex={0} className="btn btn-primary mx-1">
            Search College
          </label>
        </div>
      </div>
      {/* ----------------- */}
      {searchedCollege && (
        <div className="mt-6">
          <div className="text-center bg-[#72808A] text-black flex p-3 rounded-lg">
            <figure>
              <img
                className="h-full p-6 rounded-lg"
                src={searchedCollege?.image}
                alt="Shoes"
              />
            </figure>
            <div className="w-1/2 p-6">
              <h2 className="m-auto h-16 text-4xl font-bold">
                {searchedCollege?.name}
              </h2>
              <p className="my-1">{searchedCollege?.description}</p>
              <div>
                <p className="font-bold my-1">Admission Deadlines:</p>
                <ul className="">
                  <li className="flex justify-between">
                    <span>Fall</span>
                    <span>
                      {searchedCollege?.admissionProcess.deadlines.fall}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Spring</span>
                    <span>
                      {searchedCollege?.admissionProcess.deadlines.spring}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Summer</span>
                    <span>
                      {searchedCollege?.admissionProcess.deadlines.summer}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold my-1">Events:</p>
                <ul>
                  <li className="flex justify-between">
                    <span>{searchedCollege?.events[0].title}</span>{" "}
                    <span>{searchedCollege?.events[0].date}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{searchedCollege?.events[1].title}</span>{" "}
                    <span>{searchedCollege?.events[1].date}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{searchedCollege?.events[2].title}</span>{" "}
                    <span>{searchedCollege?.events[2].date}</span>
                  </li>
                </ul>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary w-full mt-6">Details</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCollege;

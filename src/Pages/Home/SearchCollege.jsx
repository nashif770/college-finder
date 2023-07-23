import React, { useState } from "react";
import Heading from "../../Components/Heading";

const SearchCollege = () => {
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Grapes",
    "Orange",
    "Pineapple",
    "Strawberry",
  ];

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="h-screen p-2 bg-[url('https://i.ibb.co/nRDfBFQ/Banner2.jpg')] bg-cover">
        <Heading title={"Find Your Path to Higher Education"}></Heading>
      <div className="flex flex-col m-auto w-1/2">
        <input
          type="text"
          className="p-3 rounded-xl m-6 bg-slate-300"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <div className="dropdown dropdown-bottom m-auto">
          <label tabIndex={0} className="btn btn-primary m-1">
            College Search
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {filteredData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchCollege;

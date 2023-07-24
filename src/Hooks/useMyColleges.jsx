import React, { useEffect, useState } from "react";

const useMyColleges = () => {
  const [myColleges, setMyColleges] = useState([]);
  useEffect(() => {
    fetch("https://college-finder-server-nashif770.vercel.app/mySubmission")
      .then((res) => res.json())
      .then((data) => setMyColleges(data));
  }, []);

  return [myColleges];
};
export default useMyColleges;

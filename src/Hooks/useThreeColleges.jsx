import React, { useEffect, useState } from "react";

const useThreeColleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://college-finder-server-nashif770.vercel.app/threeColleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return [colleges];
};

export default useThreeColleges;

import React, { useEffect, useState } from "react";

const useThreeColleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/threeColleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return [colleges];
};

export default useThreeColleges;

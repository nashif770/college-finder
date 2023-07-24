import { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allColleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return [colleges]
};

export default useColleges;

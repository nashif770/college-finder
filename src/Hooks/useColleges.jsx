import { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState("");
  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const allColleges = colleges.colleges;


  return [allColleges]
};

export default useColleges;

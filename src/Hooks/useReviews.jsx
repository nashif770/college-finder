import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const allReviews = reviews;
  console.log(allReviews)
    return [allReviews]
};

export default useReviews;
import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://college-finder-server-nashif770.vercel.app/allReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const allReviews = reviews;
  
    return [allReviews]
};

export default useReviews;
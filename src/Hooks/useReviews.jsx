import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://college-finder-server.vercel.app/allReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const allReviews = reviews;
  
    return [allReviews]
};

export default useReviews;
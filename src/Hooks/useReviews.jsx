import React, { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const allReviews = reviews.reviews;
    return [allReviews]
};

export default useReviews;
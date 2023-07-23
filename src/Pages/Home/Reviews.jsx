import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const allReviews = reviews.reviews;

  console.log("rev", allReviews);

  return (
    <div className="max-w-screen-2xl mx-auto my-32 text-black p-6">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {allReviews?.map((oneReview) => (
          <SwiperSlide className="bg-[#BFD7B5] rounded-lg" key={oneReview.review_id}>
            <div className="p-6 m-auto">
              <div className="text-center p-3">
                <p>{oneReview.comment}</p>
              </div>
              <hr></hr>
              <div className="flex justify-center items-center m-auto mt-[12px] p-3 text-center">
                <div className="">
                  <p>Reviewed By</p>
                  <p className="font-semibold text-[20px]">
                    {oneReview.author}
                  </p>
                  <p>{oneReview.review_date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;

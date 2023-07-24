import React from "react";
import useMyColleges from "../../Hooks/useMyColleges";
import Heading from "../../Components/Heading";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyColleges = () => {
  const [myColleges] = useMyColleges();
  const [axiosSecure] = useAxiosSecure();
  console.log(myColleges);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReview = (data, event) => {
    event.preventDefault();
    const email = user.email;
    const submittedCollege = selectedCollege?.name;
    const collegeSubmission = {
      ...data,
      email: email,
      submittedCollege: submittedCollege,
    };

    axiosSecure.post("/reviews", collegeSubmission).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Heading title={"Applied Colleges"}></Heading>
      <div className="text-black">
        {myColleges.map((myCollege) => (
          <div className="flex justify-center m-6 bg-gray-300 rounded-lg p-6">
            <div className="mt-3">
              <h3 className="text-2xl font-bold text-black text-center m-3">
                {myCollege.submittedCollege}
              </h3>
              <form onSubmit={handleSubmit(handleReview)}>
                <div className="my-4">
                  <label htmlFor="name" className="text-lg font-normal">
                    Your Review
                  </label>
                  <textarea
                    className="p-3"
                    rows="4"
                    cols="50"
                    placeholder="Type your Review here..."
                    {...register("comment", { required: true })}
                  ></textarea>
                </div>
                <div className="my-4">
                  <label htmlFor="name" className="text-lg font-normal">
                    Your Rating
                  </label>
                  <input
                    id="phone_number"
                    rows="4"
                    cols="50"
                    className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
                    type="number"
                    placeholder="rating"
                    {...register("rating", { required: true })}
                  ></input>
                </div>

                <div className="mt-10">
                  <button className="btn btn-primary w-full">Submit</button>
                </div>
              </form>
            </div>
            <div className="m-6">
              <p className="text-2xl m-2">{myCollege.candidate_name}</p>
              <p>Phone: {myCollege.phone_number}</p>
              <p>Email: {myCollege.email}</p>
              <p>
                <span className="font-bold">Address:</span> {myCollege.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyColleges;

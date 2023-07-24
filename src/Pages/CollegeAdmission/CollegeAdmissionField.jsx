import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import useColleges from "../../Hooks/useColleges";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CollegeAdmissionField = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [axiosSecure] = useAxiosSecure();

  const [colleges] = useColleges();

  const selectedCollege = colleges?.find(
    (allCollege) => allCollege?.college_id == id
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddAdmission = (data, event) => {
    event.preventDefault();
    const email = user.email;
    const submittedCollege = selectedCollege?.name;
    const collegeSubmission = {
      ...data,
      email: email,
      submittedCollege: submittedCollege,
    };
    console.log(collegeSubmission);

    axiosSecure.post("/mySubmission", collegeSubmission).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="mt-10 w-4/6 m-auto border shadow-xl rounded-lg p-6 mb-10 text-black">
      <h3 className="text-4xl text-center p-6">Admission Form</h3>
      <form onSubmit={handleSubmit(handleAddAdmission)}>
        <h1 className="text-2xl text-center bg-white p-6 rounded-full">
          {selectedCollege?.name}
        </h1>
        <div className="w-full mx-3">
          <div className="my-4">
            <label htmlFor="name" className="text-lg font-normal">
              Name
            </label>
            <input
              id="candidate_name"
              {...register("candidate_name", { required: true })}
              className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
              type="name"
              placeholder="Your name"
            />
            {errors.candidate_name?.type === "required" && (
              <p role="alert" className="text-red-400 mt-3">
                Name is required
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="name" className="text-lg font-normal">
              Subject Name
            </label>
            <input
              id="subject_name"
              {...register("subject_name", { required: true })}
              className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
              type="name"
              placeholder="Subject name"
            />
            {errors.subject_name?.type === "required" && (
              <p role="alert" className="text-red-400 mt-3">
                Subject name is required
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="name" className="text-lg font-normal">
              Phone Number
            </label>
            <input
              id="phone_number"
              {...register("phone_number", { required: true })}
              className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
              type="name"
              placeholder="Phone Number"
            />
            {errors.phone_number?.type === "required" && (
              <p role="alert" className="text-red-400 mt-3">
                Phone Number is required
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="name" className="text-lg font-normal">
              Address
            </label>
            <input
              id="address"
              {...register("address", { required: true })}
              className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
              type="name"
              placeholder="Address"
            />
            {errors.address?.type === "required" && (
              <p role="alert" className="text-red-400 mt-3">
                Address is required
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="name" className="text-lg font-normal">
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              {...register("dateOfBirth", { required: true })}
              className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
              type="date"
              placeholder="Date of Birth"
            />
            {errors.dateOfBirth?.type === "required" && (
              <p role="alert" className="text-red-400 mt-3">
                Date of Birth is required
              </p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="photoUrl" className="text-lg font-normal">
              Photo
            </label>
            <input
              id="photoUrl"
              {...register("photoUrl", { required: true })}
              className="mt-2 w-full block focus:border-[#ED6620] border-slate-400 border-[1px] outline-none p-2 rounded-md"
              type="photoUrl"
              placeholder="Add Your Photo URL"
            />
            {errors.photoUrl?.type === "required" && (
              <p role="alert" className="text-red-400 mt-3">
                photoUrl is required
              </p>
            )}
          </div>
        </div>
        <div className="mt-10">
          <button className="btn btn-primary w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CollegeAdmissionField;

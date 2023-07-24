import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import UserProfile from "../Pages/UserProfile/UserProfile";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Colleges from "../Pages/Home/Colleges";
import AllColleges from "../Pages/Colleges/AllColleges";
import CollegeAdmission from "../Pages/CollegeAdmission/CollegeAdmission";
import CollegeAdmissionField from "../Pages/CollegeAdmission/CollegeAdmissionField";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "collegeDetail/:college_id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({params}) =>fetch(`https://college-finder-server-nashif770.vercel.app/collegeDetail/${params.college_id}`)
      },
      {
        path: "colleges",
        element: <AllColleges></AllColleges>,
      },
      {
        path: "collegeAdmission",
        element: <CollegeAdmission></CollegeAdmission>
      },
      {
        path: "admissionSubmit/:id",
        element: <CollegeAdmissionField></CollegeAdmissionField>,
        loader: ({params}) =>fetch(`https://college-finder-server-nashif770.vercel.app/admissionSubmit/${params.id}`)
      },
    ],
  },
]);

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  const nav = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/colleges"}>Colleges</Link>
      </li>
      <li>
        <Link to={"/collegeAdmission"}>Admission</Link>
      </li>
      <li>
        <Link to={"/colleges"}>My College</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#413C58]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          College Finder
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
          <img className="me-6 h-[40px] rounded" src={user?.photoURL} alt="" />
        <Link className="flex-row" to={'userProfile'}>  
          <h3 className="me-6">{user?.displayName}</h3>
        </Link>
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>
        ) : (
          <Link to={"login"} className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

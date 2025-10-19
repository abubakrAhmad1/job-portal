import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunction } from "../../auth/slice/authSlice";



const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Job Portal</h1>

      <div className="space-y-4">
        <button
          onClick={() => navigate("/app/createjob")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Post a Job
        </button>

        <button
          onClick={() => navigate("/app/dashboard/list")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          View All Jobs
        </button>

        <button
          onClick={() => dispatch(logoutFunction())}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutFunction } from "../../auth/slice/authSlice";

const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-lg">
          Job Portal
        </h1>
        <p className="text-gray-700 mt-3 text-lg font-medium">
          Manage job postings and explore opportunities
        </p>
      </div>

      <div className="space-y-4 w-full max-w-sm">
        <button
          onClick={() => navigate("/app/createjob")}
          className="px-6 py-3 w-full bg-indigo-600 text-white rounded-2xl text-lg font-semibold shadow-xl hover:bg-indigo-700 active:scale-95 transition"
        >
          ➕ Post a Job
        </button>

        <button
          onClick={() => navigate("/app/dashboard/list")}
          className="px-6 py-3 w-full bg-green-600 text-white rounded-2xl text-lg font-semibold shadow-xl hover:bg-green-700 active:scale-95 transition"
        >
          📄 View All Jobs
        </button>

        <button
          onClick={() => dispatch(logoutFunction())}
          className="px-6 py-3 w-full bg-red-600 text-white rounded-2xl text-lg font-semibold shadow-xl hover:bg-red-700 active:scale-95 transition"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;

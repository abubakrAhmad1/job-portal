import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Job Portal</h1>

      <div className="space-y-4">
        <button
          onClick={() => navigate("/createjob")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Post a Job
        </button>

        <button
          onClick={() => navigate("/joblist")}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          View All Jobs
        </button>
      </div>
    </div>
  );
};

export default Welcome;

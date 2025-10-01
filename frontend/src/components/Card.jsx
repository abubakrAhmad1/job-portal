import React from "react";

const Card = ({ title, company }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl m-4 p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">TITILE</h2>
      <p className="text-gray-600 mt-2">COMPANY</p>
    </div>
  );
};

export default Card;

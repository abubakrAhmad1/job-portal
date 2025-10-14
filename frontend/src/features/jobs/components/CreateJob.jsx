import React, { useState } from "react";
import axios from "axios";

export default function CreateJobForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    roleName: "",
    location: "",
    dateAdded: "",
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Set today's date
  const handleSetToday = () => {
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setFormData({ ...formData, dateAdded: today });
  };

  // ✅ Submit form (you’ll connect this to Django API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example: Replace with your backend endpoint
      await axios.post("http://localhost:8000/api/jobs/", formData);
      alert("Job added successfully!");
      setFormData({
        companyName: "",
        roleName: "",
        location: "",
        dateAdded: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding job");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Company Name */}
        <div>
          <label className="block mb-1 font-medium">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Google"
            required
          />
        </div>

        {/* Role Name */}
        <div>
          <label className="block mb-1 font-medium">Role Name</label>
          <input
            type="text"
            name="roleName"
            value={formData.roleName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Software Engineer"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. New York, USA"
            required
          />
        </div>

        {/* Date Added */}
        <div>
          <label className="block mb-1 font-medium">Date Added</label>
          <div className="flex items-center gap-2">
            <input
              type="date"
              name="dateAdded"
              value={formData.dateAdded}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={handleSetToday}
              className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Today
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Add Job
        </button>
      </form>
    </div>
  );
}

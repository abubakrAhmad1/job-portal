export default function SearchBox() {
  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
      >
        <input
          type="text"
          name="title"
        //   value={formData.title}
        //   onChange={handleChange}
          placeholder="Job title"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="location"
        //   value={formData.location}
        //   onChange={handleChange}
          placeholder="Location"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Search
        </button>
      </form>
    </>
  );
}

import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  setLocation,
  setTitle,
  clearFields,
} from "../slices/searchSlice";

export default function SearchBox() {
  const data = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      dispatch(fetchJobs({url: `${import.meta.env.VITE_API_URL}api/jobs/`, options:{
        title: data.title,
        location: data.location,
      }}))
    );
    dispatch(clearFields());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
      >
        <input
          type="text"
          name="title"
          value={data.title || ""}
          onChange={(e) => dispatch(setTitle(e))}
          placeholder="Job title"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="location"
          value={data.location || ""}
          onChange={(e) => dispatch(setLocation(e))}
          placeholder="Location"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit" onClickFunction={handleSubmit} />
        {/* <Button type="submit" onClickFunction={()=> } /> */}
      </form>
    </>
  );
}

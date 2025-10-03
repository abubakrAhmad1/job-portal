import Button from "../../../components/Button";
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, setLocation, setTitle, clearFields } from '../slices/searchSlice';

export default function SearchBox() {
  const data = useSelector(state => state.search);
  const dispatch = useDispatch();

  // const handleTitleChange = (e) => {
  //   dispatch(setTitle(e));
  // };

  // const handleLocationChange = (e) => {
  //   dispatch(setLocation(e));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs());
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
          value={data.title || ''}
          // onChange={handleTitleChange}
          onChange={(e)=> dispatch(setTitle(e))}
          placeholder="Job title"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="location"
          value={data.location || ''}
          // onChange={handleLocationChange}
          onChange={(e)=> dispatch(setLocation(e))}
          placeholder="Location"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit" onClickFunction={handleSubmit} />
        {/* <Button type="submit" onClickFunction={()=> } /> */}
      </form>
    </>
  );
}

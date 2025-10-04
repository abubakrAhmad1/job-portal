import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../slices/searchSlice";
import Card from "../../../components/Card";

export default function JobList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchJobs(`${import.meta.env.VITE_API_URL}api/jobs/`));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>Job Listings</h2>

      {state.loading && <p>Loading jobs...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <ul>
        {state.searchedJobs.map((job) => (
          <Card key={job.id} title={job.title} company={job.company} />
        ))}
      </ul>
    </div>
  );
}

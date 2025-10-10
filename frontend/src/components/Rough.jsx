// THIS COMPONENT IS JUST USED TO CHECK THE SCRAP JOBS ARE CORRECTLY SCRAPPED OR NOT

import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Rough() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}scrap/`);
        setResponse(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []); // 👈 Run only once on mount

  return (
    <div>
      <h2>Job Listings</h2>

      {!response ? (
        <p>Loading jobs...</p>
      ) : (
        <ul>
          {response.jobs?.map((job) => (
            <Card key={job.id} title={job.title} company={job.company} />
          ))}
        </ul>
      )}
    </div>
  );
}

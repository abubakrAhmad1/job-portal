export const fetchJobsApi = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const res = await response.json();

  // Optional: if your API includes a success flag
  if (!res.success) {
    throw new Error("Failed to fetch jobs");
  }

  return res.data; // ✅ This is the actual jobs array
};

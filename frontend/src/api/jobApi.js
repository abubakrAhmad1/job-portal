export const fetchJobsApi = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch jobs');
  return response.json();
};

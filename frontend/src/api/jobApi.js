import axios from 'axios'; // Import Axios

export const fetchJobsApi = async (url) => {
  try {
    // 1. Axios request
    // Axios throws an error for non-2xx status codes automatically,
    // so we don't need the explicit 'if (!response.ok)' check.
    const response = await axios.get(url);

    // 2. Data is directly available in response.data
    const res = response.data; 

    // Optional: if your API includes a success flag in the response body
    if (res.success === false) { 
      throw new Error("Failed to fetch jobs");
    }

    // 3. Return the specific data field
    return res.data; // ✅ This is the actual jobs array
    
  } catch (error) {
    // Axios errors are robust; you can check for specific types:
    if (axios.isAxiosError(error)) {
      // Access the status code via error.response.status
      if (error.response) {
        throw new Error(`HTTP error! status: ${error.response.status}`);
      } 
    }
    
    // Re-throw the original error if it's not handled specifically
    throw error; 
  }
};
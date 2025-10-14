import axios from 'axios'; // Import Axios

export default async function authApi(URL,data) {
    // const url = import.meta.env.VITE_API_URL
    const res = await axios.post(URL,data,{withCredentials: true});
    // return res.data;
    return res;
}

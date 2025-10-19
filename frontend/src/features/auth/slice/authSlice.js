import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobsApi } from "../../../api/jobApi";
import axios from "axios";


// export const fetchJobs = createAsyncThunk(
//   "jobs/fetchJobs",
//   async ({url,options}, ThunkAPI) => {
//     try {
//       const jobs = await fetchJobsApi(url,options); // fetch from API
//       return jobs; // ✅ pass data to fulfilled
//     } catch (err) {
//       return ThunkAPI.rejectWithValue(
//         err.response?.data || "Something went wrong"
//       );
//     }
//   }
// );
export const logoutFunction =  createAsyncThunk(
  'jobs/logout',
  async () =>{
      await axios.post(`${import.meta.env.VITE_API_URL}api/logout/`,{
        withCredentials : true
      })
  }
)
///////
const initialState = {
  isAuthenticated : false,
};
///////
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ///Done updations
    setAuthenticated(state,action) {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers : (builder) => {
    builder.addCase(logoutFunction.fulfilled , (state) => {
      state.isAuthenticated = false;
    })
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJobs.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchJobs.fulfilled, (state, action) => {
//         state.loading = false;
//         state.searchedJobs = action.payload;
//       })
//       .addCase(fetchJobs.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
});

// Export actions
export const { setAuthenticated,logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;

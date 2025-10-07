import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobsApi } from "../../../api/jobApi";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({url,options}, ThunkAPI) => {
    try {
      const jobs = await fetchJobsApi(url,options); // fetch from API
      return jobs; // ✅ pass data to fulfilled
    } catch (err) {
      return ThunkAPI.rejectWithValue(
        err.response?.data || "Something went wrong"
      );
    }
  }
);


const initialState = {
  title: "",
  location: "",
  loading: false,
  error: null,
  searchedJobs: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setJobs(state, action) {
      state.searchedJobs = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload.target.value;
    },
    setLocation(state, action) {
      state.location = action.payload.target.value;
    },
    clearFields(state) {
      state.location = "";
      state.title = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.searchedJobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions
export const { setTitle, setLocation, clearFields } = searchSlice.actions;

// Export reducer
export default searchSlice.reducer;

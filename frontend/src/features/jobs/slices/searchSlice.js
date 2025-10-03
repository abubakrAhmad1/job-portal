import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, ThunkAPI) => {
    try {
      // const response = await axios.get("https://api.example.com/jobs");
      // return response.data;
      const state = ThunkAPI.getState();
      const { location, title } = state.search;
      console.log('hiiiiiiiiiiiiiiiiiiii');
      console.log(location, title);
      // Simulate API call or return dummy data
      return [];
    } catch (err) {
      return ThunkAPI.rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

const initialState = {
  title: '',
  location: '',
  loading: false,
  error: null,
  searchedJobs: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload.target.value;
    },
    setLocation(state, action) {
      state.location = action.payload.target.value;
    },
    clearFields(state) {
      state.location = null;
      state.title = null;
    }
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
export const { setTitle, setLocation ,clearFields} = searchSlice.actions;

// Export reducer
export default searchSlice.reducer;

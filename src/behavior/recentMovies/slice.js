import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'moviePicker',
  initialState: {
    movies: [],
  },
  reducers: {
    recentMoviesLoaded: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { recentMoviesLoaded } = slice.actions;

export default slice.reducer;

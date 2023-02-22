import { configureStore } from "@reduxjs/toolkit";
import { moviePickerReducer } from "./moviePicker";
import { recentMoviesReducer } from "./recentMovies";

export default configureStore({
    reducer: {
        moviePicker: moviePickerReducer,
        recentMovies: recentMoviesReducer,
    },
});

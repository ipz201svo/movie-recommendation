import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'moviePicker',
    initialState: {
        movies: [],
        genres: [],
        selectedGenreIds: [],
    },
    reducers: {
        moviesLoaded: (state, action) => {
            state.movies = action.payload;
        },

        genresLoaded: (state, action) => {
            state.genres = action.payload;
        },

        toggleGenre: (state, action) => {
            const ids = state.selectedGenreIds;
            const genreId = action.payload;
            if (ids.includes(genreId))
                state.selectedGenreIds = ids.filter(id => id !== genreId);
            else
                state.selectedGenreIds.push(genreId);
        },
    },
});

export const { moviesLoaded, toggleGenre, genresLoaded } = slice.actions;

export default slice.reducer;

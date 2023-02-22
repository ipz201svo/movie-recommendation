import { toggleGenre } from ".";
import { formatAsImageSrc } from "../utils";
import { genresLoaded, moviesLoaded } from "./slice";

export const loadMovies = (genreId) => async (dispatch, getState) => {
    dispatch(toggleGenre(genreId));

    const state = getState();
    const selectedGenresIds = state.moviePicker.selectedGenreIds;

    const data = await fetch(`${process.env.REACT_APP_SERVER_URL}/Home/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ genreIds: selectedGenresIds }),
    });
    const movies = await data.json();
    const moviesWithFormattedImageSrc = movies.map(m => ({ ...m, pictureUrl: formatAsImageSrc(m.pictureUrl) }));
    dispatch(moviesLoaded(moviesWithFormattedImageSrc));
};

export const loadGenres = () => async (dispatch, getState) => {
    const data = await fetch(`${process.env.REACT_APP_SERVER_URL}/Home/genres`, {
        method: 'GET',
    });

    const genres = await data.json();
    dispatch(genresLoaded(genres));
};


import { recentMoviesLoaded } from "./slice";
import { formatAsImageSrc } from "../utils";

export const loadRecentMovies = (quantity) => async (dispatch, getState) => {
  const url = new URL(`${process.env.REACT_APP_SERVER_URL}/Home/movies`);
  const params = { quantity };
  url.search = new URLSearchParams(params).toString();

  const data = await fetch(url);
  const movies = await data.json();
  const moviesWithFormattedImageSrc = movies.map(m => ({
    ...m,
    pictureUrl: formatAsImageSrc(m.pictureUrl),
    widePictureUrl: formatAsImageSrc(m.widePictureUrl)
  }));

  dispatch(recentMoviesLoaded(moviesWithFormattedImageSrc));
}
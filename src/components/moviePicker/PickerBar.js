import GenrePickerButton from "./GenrePickerButton"
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../behavior/moviePicker";
import { useEffect } from "react";
import { loadGenres } from "../../behavior/moviePicker/thunk";

const PickerBar = () => {
    const genres = useSelector(state => state.moviePicker.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGenres());
    }, []);

    const onToggle = (genreId) => {
        dispatch(loadMovies(genreId))
    };

    return (
        <div className="hstack gap-3">
            {
                genres.map((g, i) => (
                    <GenrePickerButton genre={g} key={i} onToggle={onToggle} />
                ))
            }
        </div>
    );
};

export default PickerBar;

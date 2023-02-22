import MovieCollection from "./MovieCollection";
import PickerBar from "./PickerBar";

const MoviePicker = () => {
    return (
        <div className="container mt-3">
            <h2 className="text-light">Pick the movie by its genre</h2>
            <PickerBar />
            <MovieCollection />
        </div>
    );
};

export default MoviePicker;

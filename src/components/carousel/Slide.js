import Caption from "./Caption";
import { useSelector } from "react-redux";

const Slide = ({ movieId, isActive }) => {
    const movie = useSelector(state => state.recentMovies.movies.find(m => m.id === movieId));
    return (
        <div className={`carousel-item ${isActive && 'active'}`}>
            <img src={movie.widePictureUrl} className="d-block w-100" alt="movie.title" />
            <Caption movieId={movieId} />
        </div>
    );
};

export default Slide;

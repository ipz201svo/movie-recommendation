import { useSelector } from "react-redux";

const Caption = ({ movieId }) => {
    const { title, genre, rating } = useSelector(state => state.recentMovies.movies.find(m => m.id === movieId));
    return (
        <div className="carousel-caption d-none d-md-block">
            <h5>{title}</h5>
            <div className='d-flex justify-content-between'>
                <span>{genre}</span>
                <span>{rating}</span>
            </div>
        </div>
    );
};

export default Caption;

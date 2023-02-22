import Slide from "./Slide";
import { useSelector } from "react-redux";

const Carousel = () => {
    const movieIds = useSelector(state => state.recentMovies.movies.map(m => m.id));

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {movieIds.map((id, i) => <Slide movieId={id} isActive={i === 0} key={id} />)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;

import { TilesCollection } from "../primitives/tilesCollection";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { useSelector } from "react-redux";

const MovieCollection = () => {
    const movies = useSelector(state => state.moviePicker.movies);
    const tiles = movies.map(m => {
        const image = { src: m.pictureUrl, alt: m.title };
        const footer = () => (<>
            <div className="d-flex align-items-center"><BsStar /> {m.rating}</div>
            <Link to={`/movies/${m.id}`} className='stretched-link text-decoration-none text-reset'>
                <h5 className="card-title">{m.title}</h5>
            </Link>
        </>);
        return {
            image,
            footer
        }
    })
    return (
        <div className="mt-3">
            <TilesCollection tiles={tiles} tileStyle="text-white bg-black" />
        </div>
    );
};

export default MovieCollection;
